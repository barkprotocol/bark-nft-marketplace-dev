import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const UnderdogsPage = () => {
  const router = useRouter();

  const handleClaim = async () => {
    try {
      // Replace this with actual logic to interact with the blockchain
      // For example, calling an API or a smart contract function to claim the NFT
      // await claimNFT('underdogs');

      // Redirect or show a success message upon successful claim
      router.push('/membership/thank-you'); // Redirect to a thank-you page
    } catch (error) {
      console.error('Error claiming NFT:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Claim Your Underdogs NFT</h1>
      <p className="mb-6">
        To claim your Underdogs NFT, you need to complete the transaction of 1.5 SOL. Ensure you are connected with a valid wallet.
      </p>
      <Button onClick={handleClaim} className="w-full bg-gray-800 text-white hover:bg-gray-700">
        Claim Now
      </Button>
    </div>
  );
};

export default UnderdogsPage;
