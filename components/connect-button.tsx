import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

const ConnectButton: React.FC = () => {
  const { connected } = useWallet();

  return (
    <div className="flex items-center justify-center">
      {connected ? (
        <div className="text-green-500 dark:text-green-300 text-sm md:text-base">
          Connected
        </div>
      ) : (
        <WalletMultiButton 
          className="bg-slate-800 text-white dark:bg-slate-900 dark:text-white hover:bg-slate-700 dark:hover:bg-slate-800 rounded-md px-4 py-2 md:px-6 md:py-3 text-sm md:text-base"
          aria-label="Connect Wallet"
        />
      )}
    </div>
  );
};

export default ConnectButton;
