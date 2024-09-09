import Hero from "@/components/hero";
import { NFTCard } from "@/components/nft-card"; // Assuming you have a reusable NFTCard component or create one
import Image from "next/image"; // Import for image handling

// Example NFT data (replace with actual data)
const nfts = [
  {
    id: 1,
    title: "BARK NFT 1",
    description: "Exclusive NFT 1",
    imageUrl: "https://example.com/nft1.png",
  },
  {
    id: 2,
    title: "BARK NFT 2",
    description: "Exclusive NFT 2",
    imageUrl: "https://example.com/nft2.png",
  },
  {
    id: 3,
    title: "BARK NFT 3",
    description: "Exclusive NFT 3",
    imageUrl: "https://example.com/nft3.png",
  },
  {
    id: 4,
    title: "BARK NFT 4",
    description: "Exclusive NFT 4",
    imageUrl: "https://example.com/nft4.png",
  },
  {
    id: 5,
    title: "BARK NFT 5",
    description: "Exclusive NFT 5",
    imageUrl: "https://example.com/nft5.png",
  },
  {
    id: 6,
    title: "BARK NFT 6",
    description: "Exclusive NFT 6",
    imageUrl: "https://example.com/nft6.png",
  },
  {
    id: 7,
    title: "BARK NFT 7",
    description: "Exclusive NFT 7",
    imageUrl: "https://example.com/nft7.png",
  },
  {
    id: 8,
    title: "BARK NFT 8",
    description: "Exclusive NFT 8",
    imageUrl: "https://example.com/nft8.png",
  },
];

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </main>
    </>
  );
}
