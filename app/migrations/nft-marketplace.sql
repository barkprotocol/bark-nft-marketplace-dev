-- Check if Enum Type Exists and Create User Roles Enum if it does not
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN 
        CREATE TYPE user_role AS ENUM ('admin', 'creator', 'buyer'); 
    END IF; 
END $$;

-- Check if Enum Type Exists and Create Club Tiers Enum if it does not
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'club_tier') THEN 
        CREATE TYPE club_tier AS ENUM ('underdogs', 'peaky_barkers', 'sparky_bros', 'whirlwind_warriors'); 
    END IF; 
END $$;

-- Check if Table Exists and Create Users Table if it does not
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
END $$;

-- Check if Table Exists and Create NFTs Table if it does not
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
END $$;

-- Check if Table Exists and Create Transactions Table if it does not
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
END $$;

-- Check if Table Exists and Create Audit Log Table if it does not
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
END $$;

-- Check if Table Exists and Create Favorites Table if it does not
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'favorites') THEN 
        CREATE TABLE favorites ( 
            user_id UUID REFERENCES users (id) ON DELETE CASCADE, 
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE, 
            PRIMARY KEY (user_id, nft_id) 
        ); 
    END IF; 
END $$;

-- Check if Table Exists and Create Ratings and Reviews Table if it does not
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'ratings_reviews') THEN 
        CREATE TABLE ratings_reviews ( 
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE, 
            user_id UUID REFERENCES users (id) ON DELETE CASCADE, 
            rating INT CHECK (rating >= 1 AND rating <= 5), 
            review TEXT, 
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp, 
            UNIQUE (nft_id, user_id) 
        ); 
    END IF; 
END $$;

-- Check if Table Exists and Create Helius API Data Table if it does not
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
END $$;

-- Check if Table Exists and Create Token Transactions Table if it does not
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'token_transactions') THEN 
        CREATE TABLE token_transactions ( 
            id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
            nft_id UUID REFERENCES nfts (id) ON DELETE CASCADE, 
            token_id UUID, 
            buyer_id UUID REFERENCES users (id) ON DELETE SET NULL, 
            seller_id UUID REFERENCES users (id) ON DELETE SET NULL, 
            amount NUMERIC(10, 2) NOT NULL, 
            transaction_hash TEXT, 
            created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp 
        ); 
    END IF; 
END $$;

-- Function to Update User Profile
CREATE OR REPLACE FUNCTION update_user_profile (
    p_user_id UUID,
    p_email TEXT,
    p_password TEXT,
    p_username TEXT,
    p_bio TEXT,
    p_wallet_address TEXT
) RETURNS VOID AS $$
BEGIN
    UPDATE users
    SET email = COALESCE(p_email, email),
        password = COALESCE(p_password, password),
        username = COALESCE(p_username, username),
        bio = COALESCE(p_bio, bio),
        wallet_address = COALESCE(p_wallet_address, wallet_address),
        updated_at = current_timestamp
    WHERE id = p_user_id;
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error updating user profile: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Function to Update NFT Details
CREATE OR REPLACE FUNCTION update_nft_details (
    p_nft_id UUID,
    p_name TEXT,
    p_description TEXT,
    p_metadata_url TEXT,
    p_image_url TEXT,
    p_category TEXT,
    p_tags TEXT[],
    p_solana_token_address TEXT
) RETURNS VOID AS $$
BEGIN
    UPDATE nfts
    SET name = COALESCE(p_name, name),
        description = COALESCE(p_description, description),
        metadata_url = COALESCE(p_metadata_url, metadata_url),
        image_url = COALESCE(p_image_url, image_url),
        category = COALESCE(p_category, category),
        tags = COALESCE(p_tags, tags),
        solana_token_address = COALESCE(p_solana_token_address, solana_token_address),
        updated_at = current_timestamp
    WHERE id = p_nft_id;
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error updating NFT details: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Function to Handle Payment with SPL Tokens
CREATE OR REPLACE FUNCTION handle_spl_payment (
    p_nft_id UUID,
    p_buyer_id UUID,
    p_seller_id UUID,
    p_token_id UUID,
    p_amount NUMERIC(10, 2),
    p_transaction_hash TEXT
) RETURNS VOID AS $$
BEGIN
    -- Record the payment
    INSERT INTO token_transactions (nft_id, token_id, buyer_id, seller_id, amount, transaction_hash)
    VALUES (p_nft_id, p_token_id, p_buyer_id, p_seller_id, p_amount, p_transaction_hash);
    
    -- Update user balances (this requires a balance tracking mechanism to be implemented)
    -- Here, we assume a function update_user_balance exists that updates balances based on token transactions.
    PERFORM update_user_balance(p_buyer_id, p_token_id, -p_amount);
    PERFORM update_user_balance(p_seller_id, p_token_id, p_amount);
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error handling SPL payment: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Function to Handle Payment with SOL
CREATE OR REPLACE FUNCTION handle_sol_payment (
    p_nft_id UUID,
    p_buyer_id UUID,
    p_seller_id UUID,
    p_amount NUMERIC(10, 2),
    p_transaction_hash TEXT
) RETURNS VOID AS $$
BEGIN
    -- Record the payment
    INSERT INTO transactions (nft_id, buyer_id, seller_id, sale_price, status, transaction_hash)
    VALUES (p_nft_id, p_buyer_id, p_seller_id, p_amount, 'completed', p_transaction_hash);
    
    -- Update user balances (this requires a balance tracking mechanism to be implemented)
    -- Here, we assume a function update_user_balance exists that updates balances based on SOL transactions.
    PERFORM update_user_balance(p_buyer_id, 'SOL', -p_amount);
    PERFORM update_user_balance(p_seller_id, 'SOL', p_amount);
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error handling SOL payment: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Function to Archive Old Transactions
CREATE OR REPLACE FUNCTION archive_old_transactions () RETURNS VOID AS $$
BEGIN
    INSERT INTO transactions_archive (SELECT * FROM transactions WHERE transaction_date < NOW() - INTERVAL '1 year');
    DELETE FROM transactions WHERE transaction_date < NOW() - INTERVAL '1 year';
EXCEPTION
    WHEN others THEN
        RAISE NOTICE 'Error archiving old transactions: %', SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- Check for Existing Indexes and Create Indexes if They Do Not Exist
DO $$
BEGIN
    -- Create Index on Users Table Email if it does not exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename = 'users' AND indexname = 'idx_users_email') THEN
        CREATE INDEX idx_users_email ON users (email);
    END IF;

    -- Create Index on Users Table Wallet Address if it does not exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename = 'users' AND indexname = 'idx_users_wallet_address') THEN
        CREATE INDEX idx_users_wallet_address ON users (wallet_address);
    END IF;

    -- Create Index on NFTs Table Creator ID if it does not exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename = 'nfts' AND indexname = 'idx_nfts_creator_id') THEN
        CREATE INDEX idx_nfts_creator_id ON nfts (creator_id);
    END IF;

    -- Create Index on Transactions Table NFT ID if it does not exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename = 'transactions' AND indexname = 'idx_transactions_nft_id') THEN
        CREATE INDEX idx_transactions_nft_id ON transactions (nft_id);
    END IF;

    -- Create Index on Token Transactions Table Token ID if it does not exist
    IF NOT EXISTS (SELECT 1 FROM pg_indexes WHERE tablename = 'token_transactions' AND indexname = 'idx_token_transactions_token_id') THEN
        CREATE INDEX idx_token_transactions_token_id ON token_transactions (token_id);
    END IF;
END $$;

-- View for Recent Transactions
CREATE OR REPLACE VIEW recent_transactions AS
SELECT t.id, n.name AS nft_name, u1.username AS buyer, u2.username AS seller, t.sale_price, t.transaction_date
FROM transactions t
JOIN nfts n ON t.nft_id = n.id
JOIN users u1 ON t.buyer_id = u1.id
JOIN users u2 ON t.seller_id = u2.id
WHERE t.transaction_date > NOW() - INTERVAL '30 days';