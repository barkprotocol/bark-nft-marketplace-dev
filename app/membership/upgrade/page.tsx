"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

// Define available membership levels
const MEMBERSHIP_LEVELS = ['underdogs', 'peaky-barkers', 'sparky-bros'];

const UPGRADE_DESCRIPTION = "Upgrade your membership to unlock exclusive benefits, access to premium NFTs, and more.";

const UpgradePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState(MEMBERSHIP_LEVELS[0]);

  const handleUpgrade = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/upgrade-membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ level: selectedLevel }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to upgrade membership. Please try again later.');
      }

      const result = await response.json();
      setSuccess(result.message || 'Membership upgraded successfully!');
    } catch (err: unknown) {
      setError(`Error: ${err instanceof Error ? err.message : 'An unexpected error occurred.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-center mb-4">Upgrade Your Membership</h1>
        <p className="text-lg text-center mb-6">{UPGRADE_DESCRIPTION}</p>

        <div className="mb-6">
          <label htmlFor="membership-level" className="block text-lg font-medium mb-2">Select Membership Level:</label>
          <select
            id="membership-level"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            {MEMBERSHIP_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-center mb-4">
          <Button
            variant="primary"
            className="px-6 py-3 flex items-center"
            onClick={handleUpgrade}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner className="mr-2" />
                Upgrading...
              </>
            ) : (
              "Upgrade Now"
            )}
          </Button>
        </div>

        {success && (
          <p
            aria-live="polite"
            className="text-green-600 text-center mb-4"
          >
            {success}
          </p>
        )}
        {error && (
          <p
            aria-live="assertive"
            className="text-red-600 text-center mb-4"
          >
            {error}
          </p>
        )}
      </div>
    </main>
  );
};

export default UpgradePage;
