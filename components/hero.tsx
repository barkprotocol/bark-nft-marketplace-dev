"use client";

import React from 'react';
import Link from 'next/link';

interface AppHeroProps {
  isPremiumMember: boolean;
}

// Define constants directly in the file
const HERO_TITLE = "Welcome to the BARK Club";
const HERO_DESCRIPTION_PREMIUM =
  "As a premium member, enjoy exclusive access to our elite collection of NFTs backed by real-world assets. Unlock top-tier club privileges and perks.";
const HERO_DESCRIPTION_BASIC =
  "Discover our exclusive collection of NFTs and become a premium member to unlock more rewards. Upgrade your membership for access to premium BARK assets.";
const COLLECTION_BUTTON_TEXT = "Explore Collection";
const MINT_NFT_BUTTON_TEXT = "Mint NFT";
const UPGRADE_BUTTON_TEXT = "Upgrade Membership";

export default function AppHero({ isPremiumMember }: AppHeroProps) {
  return (
    <main className="hero py-16 md:py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Subtext */}
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            Blockchain Asset and Reward Keeper
          </h2>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
            {HERO_TITLE}
          </h1>

          {/* Dynamic Description based on membership */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {isPremiumMember ? HERO_DESCRIPTION_PREMIUM : HERO_DESCRIPTION_BASIC}
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="/collection">
              <a className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 transition">
                {COLLECTION_BUTTON_TEXT}
              </a>
            </Link>

            {isPremiumMember ? (
              // If the user is a premium member, allow minting
              <Link href="/mint">
                <a className="px-6 py-3 bg-gray-300 text-black text-lg font-medium rounded-md shadow-md hover:bg-gray-400 transition">
                  {MINT_NFT_BUTTON_TEXT}
                </a>
              </Link>
            ) : (
              // If the user is not a premium member, prompt upgrade
              <Link href="/upgrade">
                <a className="px-6 py-3 bg-yellow-500 text-black text-lg font-medium rounded-md shadow-md hover:bg-yellow-600 transition">
                  {UPGRADE_BUTTON_TEXT}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
