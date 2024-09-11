'use client';

import { FC, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-toastify';

const MintNFT: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [tier, setTier] = useState('bronze');
  const [isMinting, setIsMinting] = useState(false);

  const mintNFT = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet.");
      return;
    }

    setIsMinting(true);

    try {
      // Construct the transaction for minting NFT
      const transaction = new Transaction();
      // Add instructions to the transaction here
      // e.g., transaction.add(mintInstruction);

      // Send the transaction
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'confirmed');

      toast.success(`NFT minted successfully! Signature: ${signature}`);
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast.error('Failed to mint NFT. Please try again.');
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Mint BARK NFT</CardTitle>
        <CardDescription>Choose your membership tier and mint your NFT</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Select onValueChange={(value) => setTier(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="underdogs">Underdogs</SelectItem>
              <SelectItem value="barkers">The Peaky Barkers</SelectItem>
              <SelectItem value="sparky">Sparky Bros</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={mintNFT}
            disabled={!publicKey || isMinting}
            className={`transition-colors duration-300 ${isMinting ? 'bg-gray-500' : 'bg-black hover:bg-gray-800'}`}
          >
            {isMinting ? 'Minting...' : 'Mint NFT'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MintNFT;
