import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global CSS styles
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from 'next-themes'; // Optional: for theming
import { createClient, SupabaseClient } from '@supabase/supabase-js'; // Supabase client
import { WalletProvider } from '@solana/wallet-adapter-react'; // Solana wallet provider
import { ConnectionProvider, Connection } from '@solana/wallet-adapter-react'; // Solana connection provider
import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify'; // Optional: for notifications
import 'react-toastify/dist/ReactToastify.css'; // Optional: for toast styles

// Supabase configuration
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Solana configuration
const SOLANA_NETWORK = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';

// Create a connection to Solana
const connection = new Connection(SOLANA_NETWORK);

function NftMarketplaceApp({ Component, pageProps }: AppProps) {
  const supabaseClient = useMemo(() => createClient(SUPABASE_URL, SUPABASE_ANON_KEY), [SUPABASE_URL, SUPABASE_ANON_KEY]);

  return (
    <ThemeProvider>
      <SupabaseProvider client={supabaseClient}>
        <ConnectionProvider connection={connection}>
          <WalletProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </WalletProvider>
        </ConnectionProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
}

export default NftMarketplaceApp;
