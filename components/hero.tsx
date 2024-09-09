"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

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
            <Link href="/collection" aria-label="Explore NFT Collection">
              <Button variant="default" className="px-6 py-3">
                {COLLECTION_BUTTON_TEXT}
              </Button>
            </Link>

            {isPremiumMember ? (
              <Link href="/mint" aria-label="Mint NFT">
                <Button variant="secondary" className="px-6 py-3">
                  {MINT_NFT_BUTTON_TEXT}
                </Button>
              </Link>
            ) : (
              <Link href="/upgrade" aria-label="Upgrade Membership">
                <Button variant="outline" className="px-6 py-3">
                  {UPGRADE_BUTTON_TEXT}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}