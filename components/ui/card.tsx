"use client";

import React from 'react';
import Link from 'next/link';

interface CardProps {
  nft: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const Card: React.FC<CardProps> = ({ nft }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={nft.imageUrl}
        alt={nft.title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy" // Improve performance by lazy loading images
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{nft.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{nft.description}</p>
        <Link href={`/nft/${nft.id}`} passHref>
          <a className="bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
