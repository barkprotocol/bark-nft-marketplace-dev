-- Check if Enum Type Exists and Create User Roles Enum if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('admin', 'creator', 'buyer');
    END IF;
END
$$;

-- Check if Enum Type Exists and Create Club Tiers Enum if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'club_tier') THEN
        CREATE TYPE club_tier AS ENUM ('underdogs', 'peaky_barkers', 'sparky_bros', 'whirlwind_warriors');
    END IF;
END
$$;

-- Check if Table Exists and Create Users Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'users') THEN
        CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL, -- Store hashed password
            username TEXT UNIQUE NOT NULL,
            bio TEXT,
            role user_role NOT NULL DEFAULT 'buyer',
            wallet_address TEXT UNIQUE, -- Added wallet address for Solana
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            CONSTRAINT email_format CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$')
        );
    END IF;
END
$$;

-- Check if Table Exists and Create NFTs Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'nfts') THEN
        CREATE TABLE nfts (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            creator_id UUID REFERENCES users (id) ON DELETE SET NULL,
            name TEXT NOT NULL,
            description TEXT,
            metadata_url TEXT NOT NULL,
            image_url TEXT,
            category TEXT,
            tags TEXT[],
            status TEXT NOT NULL DEFAULT 'active',
            solana_token_address TEXT UNIQUE, -- Added Solana token address
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            UNIQUE (name, creator_id)
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Transactions Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'transactions') THEN
        CREATE TABLE transactions (
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE,
            buyer_id UUID REFERENCES users (id) ON DELETE SET NULL,
            seller_id UUID REFERENCES users (id) ON DELETE SET NULL,
            sale_price NUMERIC(10, 2) NOT NULL CHECK (sale_price > 0),
            transaction_date TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            status TEXT NOT NULL DEFAULT 'pending',
            transaction_hash TEXT, -- Added transaction hash for Solana
            UNIQUE (nft_id, transaction_date)
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Audit Log Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'audit_log') THEN
        CREATE TABLE audit_log (
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            action TEXT NOT NULL,
            table_name TEXT NOT NULL,
            record_id UUID NOT NULL,
            changed_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            user_id UUID REFERENCES users (id) ON DELETE SET NULL
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Favorites Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'favorites') THEN
        CREATE TABLE favorites (
            user_id UUID REFERENCES users (id) ON DELETE CASCADE,
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE,
            PRIMARY KEY (user_id, nft_id)
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Ratings and Reviews Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'ratings_reviews') THEN
        CREATE TABLE ratings_reviews (
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE,
            user_id UUID REFERENCES users (id) ON DELETE CASCADE,
            rating INT CHECK (
                rating >= 1
                AND rating <= 5
            ),
            review TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            UNIQUE (nft_id, user_id)
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Helius API Data Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'helius_data') THEN
        CREATE TABLE helius_data (
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE,
            api_response JSONB, -- Store the response from Helius API
            fetched_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
        );
    END IF;
END
$$;

-- Check if Table Exists and Create Membership Badges Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'membership_badges') THEN
        CREATE TABLE membership_badges (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT UNIQUE NOT NULL,
            description TEXT,
            image_url TEXT NOT NULL, -- URL for the badge image
            tier club_tier NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
        );
    END IF;
END
$$;

-- Check if Table Exists and Create User Memberships Table if it does not exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_memberships') THEN
        CREATE TABLE user_memberships (
            user_id UUID REFERENCES users (id) ON DELETE CASCADE,
            badge_id UUID REFERENCES membership_badges (id) ON DELETE SET NULL,
            awarded_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
            PRIMARY KEY (user_id, badge_id)
        );
    END IF;
END
$$;

-- Create Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
CREATE INDEX IF NOT EXISTS idx_nfts_creator_id ON nfts (creator_id);
CREATE INDEX IF NOT EXISTS idx_transactions_nft_id ON transactions (nft_id);
CREATE INDEX IF NOT EXISTS idx_transactions_buyer_id ON transactions (buyer_id);
CREATE INDEX IF NOT EXISTS idx_transactions_seller_id ON transactions (seller_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON favorites (user_id);
CREATE INDEX IF NOT EXISTS idx_ratings_reviews_nft_id ON ratings_reviews (nft_id);
CREATE INDEX IF NOT EXISTS idx_ratings_reviews_user_id ON ratings_reviews (user_id);
CREATE INDEX IF NOT EXISTS idx_helius_data_nft_id ON helius_data (nft_id);
CREATE INDEX IF NOT EXISTS idx_user_memberships_user_id ON user_memberships (user_id);
CREATE INDEX IF NOT EXISTS idx_user_memberships_badge_id ON user_memberships (badge_id);

-- Function to Create a New User
CREATE OR REPLACE FUNCTION create_user (
    p_email TEXT,
    p_password TEXT,
    p_username TEXT,
    p_bio TEXT,
    p_wallet_address TEXT
) RETURNS UUID AS $$
DECLARE
    new_user_id UUID;
BEGIN
    INSERT INTO users (email, password, username, bio, wallet_address)
    VALUES (p_email, crypt(p_password, gen_salt('bf')), p_username, p_bio, p_wallet_address)
    RETURNING id INTO new_user_id;

    RETURN new_user_id;
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'User with this email or username already exists.';
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to Add a New NFT
CREATE OR REPLACE FUNCTION create_nft (
    p_creator_id UUID,
    p_name TEXT,
    p_description TEXT,
    p_metadata_url TEXT,
    p_image_url TEXT,
    p_category TEXT,
    p_tags TEXT[],
    p_solana_token_address TEXT
) RETURNS UUID AS $$
DECLARE
    new_nft_id UUID;
BEGIN
    INSERT INTO nfts (creator_id, name, description, metadata_url, image_url, category, tags, solana_token_address)
    VALUES (p_creator_id, p_name, p_description, p_metadata_url, p_image_url, p_category, p_tags, p_solana_token_address)
    RETURNING id INTO new_nft_id;

    RETURN new_nft_id;
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'NFT with this name and creator already exists.';
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to Add a New Transaction
CREATE OR REPLACE FUNCTION create_transaction (
    p_nft_id UUID,
    p_buyer_id UUID,
    p_seller_id UUID,
    p_sale_price NUMERIC(10, 2),
    p_transaction_hash TEXT
) RETURNS BIGINT AS $$
DECLARE
    new_transaction_id BIGINT;
BEGIN
    INSERT INTO transactions (nft_id, buyer_id, seller_id, sale_price, transaction_hash)
    VALUES (p_nft_id, p_buyer_id, p_seller_id, p_sale_price, p_transaction_hash)
    RETURNING id INTO new_transaction_id;

    RETURN new_transaction_id;
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'Transaction already exists for this NFT and date.';
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to Create a Membership Badge
CREATE OR REPLACE FUNCTION create_membership_badge (
    p_name TEXT,
    p_description TEXT,
    p_image_url TEXT,
    p_tier club_tier
) RETURNS UUID AS $$
DECLARE
    new_badge_id UUID;
BEGIN
    INSERT INTO membership_badges (name, description, image_url, tier)
    VALUES (p_name, p_description, p_image_url, p_tier)
    RETURNING id INTO new_badge_id;

    RETURN new_badge_id;
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'Badge with this name already exists.';
        RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Function to Award a Membership Badge to a User
CREATE OR REPLACE FUNCTION award_membership_badge (
    p_user_id UUID,
    p_badge_id UUID
) RETURNS VOID AS $$
BEGIN
    INSERT INTO user_memberships (user_id, badge_id)
    VALUES (p_user_id, p_badge_id)
    ON CONFLICT (user_id, badge_id) DO NOTHING;
END;
$$ LANGUAGE plpgsql;

-- Function to Update NFT Image URL
CREATE OR REPLACE FUNCTION update_nft_image_url (
    p_nft_id UUID,
    p_image_url TEXT
) RETURNS VOID AS $$
BEGIN
    UPDATE nfts
    SET image_url = p_image_url, updated_at = current_timestamp
    WHERE id = p_nft_id;
END;
$$ LANGUAGE plpgsql;