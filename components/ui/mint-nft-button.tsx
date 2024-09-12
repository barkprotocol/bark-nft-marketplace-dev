"use client";

import React from 'react';
import Link from 'next/link';

interface MintNFTButtonProps {
  nftId: number;
}

const MintNFTButton: React.FC<MintNFTButtonProps> = ({ nftId }) => {
  return (
    <Link href={`/nft/${nftId}/mint`} passHref>
      <a
        className="bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
        aria-label={`Mint NFT with ID ${nftId}`}
      >
        Mint NFT
      </a>
    </Link>
  );
};

export default MintNFTButton;
