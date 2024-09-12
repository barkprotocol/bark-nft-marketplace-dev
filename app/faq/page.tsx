import { FC } from 'react';
import Head from 'next/head';

const FAQ: FC = () => {
  return (
    <>
      <Head>
        <title>FAQ | BARK Protocol</title>
        <meta name="description" content="Frequently Asked Questions about BARK Protocol. Find answers to common questions and learn more about our platform." />
      </Head>
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">What is BARK Protocol?</h2>
          <p>BARK Protocol is a blockchain-based platform that facilitates the management and interaction with Solana assets, including NFTs and SPL tokens.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">How can I get started?</h2>
          <p>To get started, create an account on our sign-up page and connect your Solana wallet. You can then explore our features and engage with our community.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Where can I find support?</h2>
          <p>If you need support, visit our support page or connect with us on Telegram and Twitter for real-time assistance.</p>
        </div>
      </main>
    </>
  );
};

export default FAQ;
