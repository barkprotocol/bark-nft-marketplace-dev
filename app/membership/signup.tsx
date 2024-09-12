"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

// Define available membership levels
const MEMBERSHIP_LEVELS = ['underdogs', 'peaky-barkers', 'sparky-bros'];

const Signup = () => {
  const router = useRouter();
  const { level } = router.query;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle cases where level is undefined or invalid
  const getTitle = () => {
    switch (level) {
      case 'underdogs':
        return 'Join the Underdogs';
      case 'peaky-barkers':
        return 'Upgrade to Peaky Barkers';
      case 'sparky-bros':
        return 'Become a Sparky Bros';
      default:
        return 'Membership Signup';
    }
  };

  const getDescription = () => {
    switch (level) {
      case 'underdogs':
        return 'Welcome to the Underdogs! Complete the registration to start enjoying your benefits.';
      case 'peaky-barkers':
        return 'Upgrade your membership to Peaky Barkers and unlock additional perks.';
      case 'sparky-bros':
        return 'Congratulations on reaching Sparky Bros! Complete the registration to enjoy all premium benefits.';
      default:
        return 'Please select a valid membership level to proceed with the signup.';
    }
  };

  const handleSignup = async () => {
    if (!level || !MEMBERSHIP_LEVELS.includes(level as string)) {
      setError('Invalid membership level.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/signup-membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level }),
      });

      if (!response.ok) {
        throw new Error('Failed to complete signup. Please try again later.');
      }

      const result = await response.json();
      setSuccess(result.message || 'Signup completed successfully!');
      // Optionally redirect or clear the form here
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-6">
            {getTitle()}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {getDescription()}
          </p>
          <Button 
            variant="default" 
            className="w-full" 
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner className="mr-2" />
                Completing Signup...
              </>
            ) : (
              "Complete Signup"
            )}
          </Button>

          {success && <p className="text-green-600 text-center mt-4">{success}</p>}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
