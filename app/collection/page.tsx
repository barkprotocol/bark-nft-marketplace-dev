"use client";

import React from 'react';
import Hero from '@/components/hero';
import { NFTCard } from '@/components/ui/nft-card';

// Example NFT data (replace with actual data source or API call)
const nfts = [
  {
    id: 1,
    title: 'BARK NFT 1',
    description: 'Exclusive NFT 1',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 2,
    title: 'BARK NFT 2',
    description: 'Exclusive NFT 2',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 3,
    title: 'BARK NFT 3',
    description: 'Exclusive NFT 3',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 4,
    title: 'BARK NFT 4',
    description: 'Exclusive NFT 4',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 5,
    title: 'BARK NFT 5',
    description: 'Exclusive NFT 5',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 6,
    title: 'BARK NFT 6',
    description: 'Exclusive NFT 6',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 7,
    title: 'BARK NFT 7',
    description: 'Exclusive NFT 7',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
  {
    id: 8,
    title: 'BARK NFT 8',
    description: 'Exclusive NFT 8',
    imageUrl: 'https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png',
  },
];

export default function CollectionPage() {
  return (
    <>
      <Hero isPremiumMember={false} /> {/* Pass actual prop based on user status */}
      <main className="flex-1 flex flex-col gap-6 px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">NFT Collection</h2>
        
        <div className="flex justify-center mb-8">
          <img 
            src="https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png"
            alt="BARK Club Badge"
            className="max-w-xs rounded-lg shadow-lg"
          />
        </div>
        
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">Welcome to the BARK NFT Collection!</p>
          <p className="text-gray-700 mt-2">
            Explore our exclusive NFTs and become part of the BARK community. Each NFT represents a unique digital asset with distinct characteristics and utilities. Join us and discover what makes each piece special!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </main>
    </>
  );
}
