"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface AppHeroProps {
  membershipLevel: 'underdogs' | 'peaky-barkers' | 'sparky-bros';
}

// Define constants directly in the file
const HERO_TITLE = "Join the Underdogs Club";
const HERO_DESCRIPTION_UNDERDOGS =
  "Become a member of the Underdogs Club and explore our exclusive NFT collections. Enjoy rewards, participate in community events, and elevate your membership for additional perks and access.";
const HERO_DESCRIPTION_PEAKY_BARKERS =
  "As a Peaky Barker, unlock premium content, early access to events, and personalized support. Engage with exclusive webinars and special edition merchandise.";
const HERO_DESCRIPTION_SPARKY_BROS =
  "As a Sparky Bro, enjoy all Peaky Barker benefits plus direct mentorship from experts, VIP event access, and featured member spotlights. Receive customized gear and personalized thank-you packages.";
const COLLECTION_BUTTON_TEXT = "Explore Our Collection";
const MINT_NFT_BUTTON_TEXT = "Mint Your NFT";
const UPGRADE_BUTTON_TEXT = "Upgrade Your Membership";
const CLAIM_REWARDS_BUTTON_TEXT = "Claim Your Rewards";

export default function AppHero({ membershipLevel }: AppHeroProps) {
  let description = HERO_DESCRIPTION_UNDERDOGS;
  let additionalButtons = null;

  // Determine the description and buttons based on membership level
  switch (membershipLevel) {
    case 'peaky-barkers':
      description = HERO_DESCRIPTION_PEAKY_BARKERS;
      additionalButtons = (
        <>
          <Link href="/mint" aria-label="Mint NFT">
            <Button variant="secondary" className="px-6 py-3 text-sm sm:text-base">
              {MINT_NFT_BUTTON_TEXT}
            </Button>
          </Link>
          <Link href="/claim-rewards" aria-label="Claim Rewards">
            <Button variant="outline" className="px-6 py-3 text-sm sm:text-base">
              {CLAIM_REWARDS_BUTTON_TEXT}
            </Button>
          </Link>
        </>
      );
      break;
    case 'sparky-bros':
      description = HERO_DESCRIPTION_SPARKY_BROS;
      additionalButtons = (
        <>
          <Link href="/mint" aria-label="Mint NFT">
            <Button variant="secondary" className="px-6 py-3 text-sm sm:text-base">
              {MINT_NFT_BUTTON_TEXT}
            </Button>
          </Link>
          <Link href="/claim-rewards" aria-label="Claim Rewards">
            <Button variant="outline" className="px-6 py-3 text-sm sm:text-base">
              {CLAIM_REWARDS_BUTTON_TEXT}
            </Button>
          </Link>
        </>
      );
      break;
  }

  return (
    <main className="hero py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Subtext */}
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Empowering Community Heroes
          </h2>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-6">
            {HERO_TITLE}
          </h1>

          {/* Dynamic Description based on membership level */}
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/collection" aria-label="Explore NFT Collection">
              <Button variant="default" className="px-6 py-3 text-sm sm:text-base">
                {COLLECTION_BUTTON_TEXT}
              </Button>
            </Link>

            {additionalButtons || (
              <Link href="/membership/upgrade" aria-label="Upgrade Membership">
                <Button variant="outline" className="px-6 py-3 text-sm sm:text-base">
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
