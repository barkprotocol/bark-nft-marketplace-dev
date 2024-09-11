import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;  // Allow additional custom classes
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, onClick, className }) => {
  return (
    <div
      className={twMerge(
        "relative border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer transition-transform transform hover:scale-105 active:scale-95",
        className
      )}
      onClick={onClick}
      aria-label={`Card for ${title}`}
      tabIndex={0}  // Make it focusable
    >
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          placeholder="blur"  // Include placeholder for loading
          blurDataURL="/images/placeholder.jpg"  // Ensure the path is correct
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
