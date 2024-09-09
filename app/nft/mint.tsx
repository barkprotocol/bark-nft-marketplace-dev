"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import { useRouter } from "next/navigation";

export default function MintNFT() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [minting, setMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    setMinting(true);
    setError(null);
    setSuccess(null);

    try {
      // Replace with your actual minting logic
      const response = await fetch("/api/mint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setSuccess("NFT minted successfully!");
        setTitle("");
        setDescription("");
        setImageUrl("");
      } else {
        throw new Error(result.message || "Minting failed");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setMinting(false);
    }
  };

  return (
    <>
      <Hero />
      <Features />
      <main className="flex-1 flex flex-col items-center gap-6 px-4 py-8">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Mint New NFT</h1>
          <form onSubmit={handleMint} className="flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-lg font-medium mb-2">Title</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-lg font-medium mb-2">Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
                rows={4}
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-lg font-medium mb-2">Image URL</span>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
            </label>
            <button
              type="submit"
              className={`bg-black text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 ${minting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={minting}
            >
              {minting ? "Minting..." : "Mint NFT"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </form>
        </div>
      </main>
    </>
  );
}
