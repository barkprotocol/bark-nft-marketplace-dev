import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface NFTCardProps {
  nft: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    creator: string;
  };
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  // Convert SOL to USDC (assuming 1 SOL = 50 USDC for this example)
  const usdcPrice = (parseFloat(nft.price) * 50).toFixed(2);

  return (
    <div
      className="nft-card bg-[#dcd7cc] dark:bg-gray-900 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
      aria-label={`NFT Card for ${nft.title}`}
    >
      <div className="relative aspect-square mb-4">
        <Image
          src={nft.imageUrl}
          alt={nft.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/path/to/placeholder.jpg"
          onError={(e) => {
            e.currentTarget.src = '/path/to/default-image.jpg';
          }}
        />
      </div>
      <h3 className="text-lg text-gray-900 dark:text-white font-semibold mb-2 truncate">{nft.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 line-clamp-2">{nft.description}</p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Creator</p>
          <p className="text-sm text-gray-900 dark:text-white truncate">{nft.creator}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-600 dark:text-gray-400">Price</p>
          <p className="text-sm text-gray-900 dark:text-white font-semibold">{nft.price} SOL</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">(≈ ${usdcPrice} USDC)</p>
        </div>
      </div>
      <Button 
        className="w-full bg-[#d0c8b9] hover:bg-[#c5bdae] text-gray-900 font-semibold py-2 px-4 rounded transition-colors duration-300"
        onClick={() => console.log(`Minting NFT: ${nft.title}`)}
      >
        Mint NFT
      </Button>
    </div>
  );
};

