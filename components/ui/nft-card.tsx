import Image from "next/image";
import React from "react";

interface NFTCardProps {
  nft: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft }) => (
  <div
    className="nft-card bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
    aria-label={`NFT Card for ${nft.title}`}
  >
    <Image
      src={nft.imageUrl}
      alt={nft.title}
      width={300}
      height={300}
      className="w-full h-auto rounded-t-lg object-cover mb-4"
      placeholder="blur"  // Optional: Placeholder for loading state
      blurDataURL="/path/to/placeholder.jpg"  // Optional: Low-resolution placeholder image
      onError={(e) => {
        // Handle image load error
        e.currentTarget.src = '/path/to/default-image.jpg'; // Fallback image
      }}
    />
    <h3 className="text-lg font-semibold mb-2 truncate">{nft.title}</h3>
    <p className="text-sm text-gray-600 truncate">{nft.description}</p>
  </div>
);
