"use client";

import Hero from "@/components/hero";
import { createClient } from '@/utils/supabase/server'
import Features from "@/components/features";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NFTCard } from "@/components/ui/nft-card";
import { useState } from "react";
import Link from "next/link";

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

export default function Index() {
  return (
    <>
      <Hero />
      <Features />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="text-xl font-semibold mb-2">Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <Link key={nft.id} href={`/nft/${nft.id}`} passHref>
              <NFTCard nft={nft} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
