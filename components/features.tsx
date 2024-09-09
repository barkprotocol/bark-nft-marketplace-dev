"use client";

import { FastForward, Lock, DollarSign, LaptopMinimal } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Fast Transactions",
    description: "Experience lightning-fast transactions on the Solana blockchain.",
    icon: <FastForward className="w-8 h-8 text-sand-500" />,
  },
  {
    title: "Secure",
    description: "Top-notch security to protect your assets.",
    icon: <Lock className="w-8 h-8 text-sand-500" />,
  },
  {
    title: "Low Fees",
    description: "Enjoy minimal transaction fees on every transaction.",
    icon: <DollarSign className="w-8 h-8 text-sand-500" />,
  },
  {
    title: "User-Friendly",
    description: "An intuitive interface for all your NFT needs.",
    icon: <LaptopMinimal className="w-8 h-8 text-sand-500" />,
  },
];

const Features = () => (
  <section className="features-section py-12 bg-sand-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-sand-700">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-card p-6 border rounded-lg shadow-lg bg-sand-100 flex flex-col items-center text-center">
            <div className="icon-wrapper mb-4">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-sand-700">{feature.title}</h3>
            <p className="text-sm text-sand-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
