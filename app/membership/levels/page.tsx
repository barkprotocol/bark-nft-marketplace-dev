"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { claimNFT } from '@/utils/api'; // Import the API utility function

// Membership Levels Data
const membershipLevels = [
  {
    level: 'underdogs',
    title: 'Underdogs',
    description: 'Join the Underdogs and gain access to our community platform, monthly newsletters, and more. Start making a difference today!',
    lightButtonText: 'Join Now',
    darkButtonText: 'Join The Club',
    claimButtonText: 'Claim Club NFT - 1.5 SOL',
    buttonVariantLight: 'secondary',
    buttonVariantDark: 'dark',
    icon: 'https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png', // Icon for Underdogs
    image: 'https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png', // Image for Underdogs
    claimLink: '/membership/clubs/underdogs'
  },
  {
    level: 'the-peaky-barkers',
    title: 'The Peaky Barkers',
    description: 'Join to The Peaky Barkers for exclusive content, early event access, and personalized support. Perfect for those looking to take their involvement to the next level.',
    lightButtonText: 'Join Now',
    darkButtonText: 'Join The Club',
    claimButtonText: 'Claim Club NFT - 1.5 SOL',
    buttonVariantLight: 'secondary',
    buttonVariantDark: 'dark',
    icon: 'https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png', // Icon for Peaky Barkers
    image: 'https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png',
    claimLink: '/membership/clubs/the-peaky-barkers'
  },
  {
    level: 'sparky-bros',
    title: 'Sparky Bros',
    description: 'Become a Sparky Bro and enjoy all Peaky Barker benefits plus exclusive mentorship, VIP access, and customized gear.',
    lightButtonText: 'Join Now',
    darkButtonText: 'Join The Club',
    claimButtonText: 'Claim Club NFT - 1.5 SOL',
    buttonVariantLight: 'secondary',
    buttonVariantDark: 'dark',
    icon: 'https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png',  // Icon for Sparky Bros
    image: 'https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png',
    claimLink: '/membership/clubs/sparky-bros'
  },
  {
    level: 'the-iron-clan',
    title: 'The Iron Clan',
    description: 'The Iron Clan members receive everything from Sparky Bros, plus early access to new features, personalized mentorship, and invites to exclusive events.',
    lightButtonText: 'Join Now',
    darkButtonText: 'Join The Club',
    claimButtonText: 'Claim Club NFT - 1.5 SOL',
    buttonVariantLight: 'secondary',
    buttonVariantDark: 'dark',
    icon: 'https://ucarecdn.com/b065ba1f-6279-4677-ae8f-0ebc1facb68d/bark_icon.png',  // Icon for Iron Clan
    image: 'https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png',
    claimLink: '/membership/clubs/the-iron-clan'
  }
];

const MembershipLevels = () => {
  // State to track NFT claiming status
  const [claimed, setClaimed] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const handleClaim = async (level: string) => {
    try {
      setLoading(prev => ({ ...prev, [level]: true }));

      const response = await claimNFT(level);

      if (response.success) {
        setClaimed(prev => ({ ...prev, [level]: true }));
      } else {
        console.error('Error claiming NFT:', response.message);
      }
    } catch (error) {
      console.error('Error claiming NFT:', error);
    } finally {
      setLoading(prev => ({ ...prev, [level]: false }));
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] mb-16 bg-white dark:bg-gray-900">
        <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
            Become a Member
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join one of our membership tiers and unlock exclusive benefits. Whether you're just getting started or looking to take your involvement to the next level, we have a membership that fits your goals.
          </p>
          <Button variant="default" className="px-8 py-4">
            Learn More
          </Button>
        </div>
      </section>

      {/* Membership Levels Section */}
      <div className="py-16 md:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">Membership Levels</h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our membership tiers and discover the benefits of each level.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {membershipLevels.map(({ level, title, description, lightButtonText, darkButtonText, claimButtonText, buttonVariantLight, buttonVariantDark, icon, image, claimLink }) => (
            <div key={level} className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              {/* Image and Icon */}
              <div className="relative w-full h-40">
                <img src={image} alt={title} className="object-cover w-full h-full"/>
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                  <img src={icon} alt={`${title} icon`} className="w-8 h-8"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {description}
                </p>
                <div className="flex flex-col gap-4">
                  <Link href={`/membership/signup?level=${level}`} className="w-full">
                    <Button variant={buttonVariantLight} className="w-full">
                      {lightButtonText}
                    </Button>
                  </Link>
                  {claimed[level] ? (
                    <Button variant={buttonVariantDark} className="w-full bg-gray-800 text-white cursor-not-allowed" disabled>
                      {darkButtonText}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleClaim(level)}
                      variant={buttonVariantDark}
                      className="w-full bg-gray-800 text-white hover:bg-gray-700"
                      disabled={loading[level]}
                    >
                      {loading[level] ? 'Processing...' : claimButtonText}
                    </Button>
                  )}
                  <Link href={claimLink} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipLevels;
