"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const UPGRADE_DESCRIPTION = "Upgrade your membership to unlock exclusive benefits, access to premium NFTs, and more.";

const UpgradePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
        // Optionally include data in the body if needed
        body: JSON.stringify({ /* payload if necessary */ }),
      });

      if (!response.ok) {
        throw new Error('Failed to upgrade membership.');
      }

      const result = await response.json();

      setSuccess(result.message);
      // Optionally redirect or perform other actions
    } catch (err) {
      setError(err.message || 'An error occurred while upgrading membership. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Upgrade Your Membership
        </h1>
        <p className="text-lg text-center mb-6">
          {UPGRADE_DESCRIPTION}
        </p>
        <div className="flex justify-center mb-4">
          <Button
            variant="primary"
            className="px-6 py-3"
            onClick={handleUpgrade}
            disabled={loading}
          >
            {loading ? "Upgrading..." : "Upgrade Now"}
          </Button>
        </div>
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      </div>
    </main>
  );
};

export default UpgradePage;
