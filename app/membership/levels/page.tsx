"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

// Membership Levels Data
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
  },
  {
    level: 'alpha-pack',
    title: 'Alpha Pack',
    description: 'Alpha Pack members receive everything from Sparky Bros, plus early access to new features, personalized mentorship, and invites to exclusive events.',
    buttonText: 'Join the Pack',
    buttonVariant: 'default'
  }
];

const MembershipLevels = () => {
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
          {membershipLevels.map(({ level, title, description, buttonText, buttonVariant }) => (
            <div key={level} className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {title}
              </h3>
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
  );
};

export default MembershipLevels;
