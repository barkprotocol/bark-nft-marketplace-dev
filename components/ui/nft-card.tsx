// components/ui/nft-card.tsx
import React from 'react';
import Image from 'next/image';

interface NFTCardProps {
  nft: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={nft.imageUrl}
        alt={nft.title}
        width={300}
        height={300}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{nft.title}</h3>
        <p className="text-gray-600">{nft.description}</p>
      </div>
    </div>
  );
};
