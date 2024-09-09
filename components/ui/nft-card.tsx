import Image from "next/image";

export const NFTCard = ({ nft }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4">
      <Image
        src={nft.imageUrl}
        alt={nft.title}
        width={300}
        height={300}
        className="rounded-lg"
      />
      <h3 className="font-semibold text-lg mt-2">{nft.title}</h3>
      <p className="text-sm text-gray-500">{nft.description}</p>
    </div>
  );
};
