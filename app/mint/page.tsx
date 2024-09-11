import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BARK NFT Minting',
  description: 'Mint your BARK membership and club tiers NFTs',
};

// Sample features
const features = [
  {
    title: "Fast Transactions",
    description: "Experience lightning-fast transactions on the Solana blockchain.",
  },
  {
    title: "Secure",
    description: "Top-notch security to protect your assets.",
  },
  {
    title: "Low Fees",
    description: "Enjoy minimal transaction fees on every transaction.",
  },
  {
    title: "User-Friendly",
    description: "An intuitive interface for all your NFT needs.",
  },
];

// Minting Card Component
const MintingCard = () => (
  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
    <h2 className="text-xl font-semibold mb-4">Mint Your NFT</h2>
    <p className="text-gray-700 mb-4">
      Choose your NFT and click the button below to mint it.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg">
      {/* Replace with actual NFT details */}
      <h3 className="text-lg font-semibold">BARK NFT #001</h3>
      <p className="text-gray-600">An exclusive NFT for our premium members.</p>
    </div>
    <div className="flex justify-center mt-6">
      <Button variant="primary">Mint NFT</Button>
    </div>
  </div>
);

// Features Section Component
const FeaturesSection = () => (
  <section className="py-12 bg-sand-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-sand-700">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-sand-100 flex flex-col items-center text-center"
          >
            <div className="mb-4">
              {/* Replace with actual icons if needed */}
              <div className="w-8 h-8 text-sand-500">Icon</div>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-sand-700">{feature.title}</h3>
            <p className="text-sm text-sand-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleMintNFT = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/mint-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* payload if necessary */ }),
      });

      if (!response.ok) {
        throw new Error('Failed to mint NFT.');
      }

      const result = await response.json();
      setSuccess(result.message);
      // Optionally redirect or perform other actions
    } catch (err) {
      setError(err.message || 'An error occurred while minting NFT. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6">
          <h1 className="text-3xl font-extrabold text-center mb-8">BARK NFT Minting</h1>
          <MintingCard />
          <FeaturesSection />
          <div className="mt-8">
            <Button
              variant="primary"
              className="px-6 py-3"
              onClick={handleMintNFT}
              disabled={loading}
            >
              {loading ? "Minting..." : "Mint NFT"}
            </Button>
            {success && <p className="text-green-600 text-center mt-4">{success}</p>}
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          </div>
        </main>
      </body>
    </html>
  );
}
