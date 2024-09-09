import Image from "next/image";

interface NFTCardProps {
  nft: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export const NFTCard = ({ nft }: NFTCardProps) => (
  <div className="nft-card bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg">
    <Image src={nft.imageUrl} alt={nft.title} width={300} height={300} className="w-full h-auto rounded-t-lg object-cover mb-4" />
    <h3 className="text-lg font-semibold mb-2">{nft.title}</h3>
    <p className="text-sm text-gray-600">{nft.description}</p>
  </div>
);
