"use client";

import React from 'react';
import Link from 'next/link';

// Define constants directly in the file
const HERO_TITLE = "Welcome to the BARK Marketplace";
const HERO_DESCRIPTION =
  "Discover, mint, and trade NFTs backed by real-world assets. Explore our collection and mint your own unique assets today!";
const COLLECTION_BUTTON_TEXT = "Collection";
const MINT_NFT_BUTTON_TEXT = "Mint NFT";

export default function AppHero() {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold">{HERO_TITLE}</h1>
          <p className="py-6">{HERO_DESCRIPTION}</p>
          <div className="flex justify-center gap-4">
            <Link href="/collection" className="btn btn-primary">
              {COLLECTION_BUTTON_TEXT}
            </Link>
            <Link href="/mint" className="btn btn-secondary">
              {MINT_NFT_BUTTON_TEXT}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
