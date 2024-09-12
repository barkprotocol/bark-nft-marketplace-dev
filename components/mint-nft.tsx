'use client';

import { FC, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'react-toastify';
import { mintNFT } from '@/utils/solana/solana';
import { BARK_MINT_ADDRESS } from '@/utils/constants'; // Ensure this is imported from the correct file

const MintNFT: FC = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [tier, setTier] = useState('bronze');
  const [isMinting, setIsMinting] = useState(false);

  const mintNFTHandler = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet.");
      return;
    }

    setIsMinting(true);

    try {
      const metadataUri = `https://example.com/metadata/${tier}.json`;

      // Call the mintNFT function from utils/solana/solana.ts
      const result = await mintNFT(publicKey, new PublicKey(BARK_MINT_ADDRESS), metadataUri);

      if (result.success) {
        toast.success(`NFT minted successfully! Signature: ${result.signature}`);
      } else {
        toast.error(`Failed to mint NFT. ${result.message}`);
      }
    } catch (error) {
      console.error('Error minting NFT:', error);
      toast.error(`Failed to mint NFT. ${error.message || 'Please try again.'}`);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Mint BARK NFT</CardTitle>
        <CardDescription>Select a membership tier to mint your NFT</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Select value={tier} onValueChange={(value) => setTier(value)}>
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
            onClick={mintNFTHandler}
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
