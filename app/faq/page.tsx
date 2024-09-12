"use client";

import { FC, useState } from 'react';
import Head from 'next/head';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Get answers to common questions about our services, NFT minting process, rewards, and more.
            </p>
            <a href="/contact" className="py-2 px-4 bg-black text-white rounded-md shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Need More Help? Contact Us
            </a>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section id="faq" className="mb-16 space-y-8">
          {/* FAQ Item 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(0)}
              aria-expanded={openIndex === 0}
              aria-controls="faq-content-0"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">What is BARK Protocol?</h2>
              {openIndex === 0 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 0 && (
              <p id="faq-content-0" className="text-gray-700 dark:text-gray-300 mt-4">
                <strong>BARK Protocol</strong> is a platform for managing blockchain assets, including NFT minting, rewards, and staking. We provide a seamless experience for interacting with digital assets on the Solana blockchain.
              </p>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(1)}
              aria-expanded={openIndex === 1}
              aria-controls="faq-content-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">How do I mint an NFT?</h2>
              {openIndex === 1 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 1 && (
              <p id="faq-content-1" className="text-gray-700 dark:text-gray-300 mt-4">
                To mint an NFT, visit our <strong>minting page</strong> and follow the instructions to create your digital asset. You'll need to connect your <strong>Solana wallet</strong> and provide the necessary details for your NFT.
              </p>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(2)}
              aria-expanded={openIndex === 2}
              aria-controls="faq-content-2"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">How can I claim rewards?</h2>
              {openIndex === 2 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 2 && (
              <p id="faq-content-2" className="text-gray-700 dark:text-gray-300 mt-4">
                Rewards can be claimed by participating in our ecosystem and meeting certain criteria. Visit the <strong>rewards page</strong> to check your eligibility and follow the instructions to claim your benefits.
              </p>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(3)}
              aria-expanded={openIndex === 3}
              aria-controls="faq-content-3"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">What wallets are supported by BARK Protocol?</h2>
              {openIndex === 3 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 3 && (
              <p id="faq-content-3" className="text-gray-700 dark:text-gray-300 mt-4">
                We support a wide range of Solana wallets, including <strong>Phantom</strong>, <strong>Solflare</strong>, and <strong>Backpack</strong>. Make sure you connect a supported wallet to interact with our platform.
              </p>
            )}
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(4)}
              aria-expanded={openIndex === 4}
              aria-controls="faq-content-4"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Is there a fee for minting an NFT?</h2>
              {openIndex === 4 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 4 && (
              <p id="faq-content-4" className="text-gray-700 dark:text-gray-300 mt-4">
                Yes, there is a small fee for minting an NFT, which covers transaction costs on the Solana blockchain. The exact fee will depend on the current network conditions.
              </p>
            )}
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(5)}
              aria-expanded={openIndex === 5}
              aria-controls="faq-content-5"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">How can I contact support?</h2>
              {openIndex === 5 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 5 && (
              <p id="faq-content-5" className="text-gray-700 dark:text-gray-300 mt-4">
                If you need assistance, visit our <strong>Contact Us</strong> page and submit your query. Our support team will get back to you as soon as possible.
              </p>
            )}
          </div>

          {/* FAQ Item 7 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggleFAQ(6)}
              aria-expanded={openIndex === 6}
              aria-controls="faq-content-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Are there royalties on BARK NFTs?</h2>
              {openIndex === 6 ? <FaChevronUp className="text-gray-800 dark:text-white" /> : <FaChevronDown className="text-gray-800 dark:text-white" />}
            </div>
            {openIndex === 6 && (
              <p id="faq-content-6" className="text-gray-700 dark:text-gray-300 mt-4">
                Yes, BARK NFTs feature a royalty system, which allows creators to earn a percentage of resale transactions. Royalties are automatically distributed upon every secondary sale.
              </p>
            )}
          </div>

        </section>
      </main>
    </>
  );
};

export default FAQ;
