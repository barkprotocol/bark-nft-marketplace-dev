"use client";

import { useState } from "react";
import Link from "next/link";
import { NFTCard } from "@/components/ui/nft-card";

// Example NFT data (replace with actual data)
const nfts = [
  { id: 1, title: "BARK NFT 1", description: "Exclusive NFT 1", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 2, title: "BARK NFT 2", description: "Exclusive NFT 2", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 3, title: "BARK NFT 3", description: "Exclusive NFT 3", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 4, title: "BARK NFT 4", description: "Exclusive NFT 4", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 5, title: "BARK NFT 5", description: "Exclusive NFT 5", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 6, title: "BARK NFT 6", description: "Exclusive NFT 6", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 7, title: "BARK NFT 7", description: "Exclusive NFT 7", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
  { id: 8, title: "BARK NFT 8", description: "Exclusive NFT 8", imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png" },
];

export default function Collection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-semibold mb-4">Our Collection</h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our exclusive BARK NFTs, each representing a unique piece of digital art. 
            These collectibles showcase the creativity and innovation within the BARK community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <Link key={nft.id} href={`/nft/${nft.id}`} passHref>
              <NFTCard nft={nft} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

