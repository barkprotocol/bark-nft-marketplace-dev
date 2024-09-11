'use client';

import { FC, ReactNode } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnection: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet; // Change to 'mainnet-beta' for production
  const endpoint = clusterApiUrl(network);
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
          <WalletMultiButton className="mb-4" />
          {children}
        </div>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnection;
