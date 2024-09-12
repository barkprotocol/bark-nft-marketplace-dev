// pages/faq.tsx
import { FC } from 'react';
import Head from 'next/head';

const FAQ: FC = () => {
  return (
    <>
      <Head>
        <title>FAQ | BARK Protocol</title>
        <meta name="description" content="Find answers to frequently asked questions about BARK Protocol, including NFT minting, rewards, and more." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] mb-16 bg-white dark:bg-gray-900 bg-opacity-70">
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about our services, NFT minting process, rewards, and more.
            </p>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section id="faq" className="mb-16">
          <div className="space-y-8 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">What is BARK Protocol?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                BARK Protocol is a platform for managing blockchain assets, including NFT minting, rewards, and staking. We provide a seamless experience for interacting with digital assets on the Solana blockchain.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">How do I mint an NFT?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To mint an NFT, visit our minting page and follow the instructions to create your digital asset. You'll need to connect your Solana wallet and provide the necessary details for your NFT.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">How can I claim rewards?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Rewards can be claimed by participating in our ecosystem and meeting certain criteria. Visit the rewards page to check your eligibility and follow the instructions to claim your benefits.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
