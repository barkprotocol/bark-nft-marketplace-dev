"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const membershipLevels = [
  {
    level: 'underdogs',
    title: 'Underdogs',
    description: 'Join the Underdogs and gain access to our community platform, monthly newsletters, and more. Start making a difference today!',
    buttonText: 'Sign Up',
    buttonVariant: 'default'
  },
  {
    level: 'peaky-barkers',
    title: 'Peaky Barkers',
    description: 'Upgrade to Peaky Barkers for exclusive content, early event access, and personalized support. Perfect for those looking to take their involvement to the next level.',
    buttonText: 'Upgrade',
    buttonVariant: 'secondary'
  },
  {
    level: 'sparky-bros',
    title: 'Sparky Bros',
    description: 'Become a Sparky Bros and enjoy all Peaky Barker benefits plus exclusive mentorship, VIP access, and customized gear.',
    buttonText: 'Join Now',
    buttonVariant: 'outline'
  }
];

const MembershipLevels = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-6">
            Membership Levels
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore our membership tiers and discover the benefits of each level. Choose the membership that best fits your goals and start making a difference today.
          </p>

          {/* Membership Levels */}
          <div className="flex flex-wrap justify-center gap-8">
            {membershipLevels.map(({ level, title, description, buttonText, buttonVariant }) => (
              <div key={level} className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {description}
                </p>
                <Link href={`/membership/signup?level=${level}`}>
                  <Button variant={buttonVariant} className="w-full">
                    {buttonText}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipLevels;
