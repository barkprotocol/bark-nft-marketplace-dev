"use client";

import Hero from "@/components/hero";
import Features from "@/components/features";
import Link from "next/link";
import { useState } from "react";

const nft = {
  id: 1,
  title: "BARK NFT - Leader",
  description: "Exclusive NFT featuring the BARK Protocol mascot, embodying our community spirit and unique digital asset ownership.",
  imageUrl: "https://ucarecdn.com/9416c194-b24e-4780-bf91-f55f4dd8f074/barkblink.png",
  club: "The Peaky Barkers",
  Badge: "https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png",
  dateMinted: "2024-09-28",
  solscanUrl: "https://solscan.io/token/your-nft-token-address" // Replace with actual Solscan URL
};

export default function NFTDetail() {
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    try {
      // Simulate minting process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("NFT Minted Successfully!");
    } catch (error) {
      console.error("Minting failed:", error);
      alert("Failed to mint NFT. Please try again.");
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <>
      <Hero />
      <Features />
      <main className="flex-1 flex flex-col items-center gap-6 px-4 py-8">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0">
            <img src={nft.imageUrl} alt={nft.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 lg:pl-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{nft.title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{nft.description}</p>

            {/* Badge and Metadata */}
            <div className="flex items-center gap-4 mb-6">
              <img src={nft.Badge} alt={`${nft.club} Badge`} className="w-8 h-8 rounded-full border-2 border-[#D0BFB4]" />
              <div className="flex flex-col">
                <span className="inline-block bg-[#D0BFB4] text-white text-xs font-bold py-1 px-3 rounded-full mb-1">
                  {nft.club}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Minted on: <span className="font-semibold">{nft.dateMinted}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleMint}
                disabled={isMinting}
                aria-label={isMinting ? "Minting NFT..." : "Mint NFT"}
                className="bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50"
              >
                {isMinting ? "Minting..." : "Mint NFT"}
              </button>
              <button
                onClick={() => alert("Stake functionality is not implemented yet")}
                aria-label="Stake NFT"
                className="bg-gray-200 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Stake NFT
              </button>
            </div>

            <div className="flex flex-col items-start gap-4">
              <Link href={nft.solscanUrl} target="_blank" className="text-[#D0BFB4] hover:underline">
                View on Solscan
              </Link>
              <Link href="/nft" className="text-gray-600 hover:underline">
                Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
