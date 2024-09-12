import { FC } from 'react';
import Head from 'next/head';
import { FaRocket, FaWallet, FaUsers, FaRegHandshake } from 'react-icons/fa';

const Services: FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | BARK Protocol</title>
        <meta name="description" content="Explore the services offered by BARK Protocol, including NFT minting, asset management, and community engagement." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="mb-8">At BARK Protocol, we offer a range of services designed to enhance your experience with Solana assets. Explore our offerings below:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <FaRocket className="text-4xl" style={{ color: '#D0BFB4' }} />
            <h2 className="text-2xl font-semibold mb-2">NFT Minting</h2>
            <p>Mint your own NFTs effortlessly using our platform. We provide an intuitive and seamless process for creating and managing your digital assets.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <FaWallet className="text-4xl" style={{ color: '#D0BFB4' }} />
            <h2 className="text-2xl font-semibold mb-2">Asset Management</h2>
            <p>Manage your Solana assets with ease. Our tools simplify staking, transferring, and tracking your tokens.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <FaUsers className="text-4xl" style={{ color: '#D0BFB4' }} />
            <h2 className="text-2xl font-semibold mb-2">Community Engagement</h2>
            <p>Connect with our vibrant community. Participate in exclusive events, discussions, and contribute to our growing ecosystem.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <FaRegHandshake className="text-4xl" style={{ color: '#D0BFB4' }} />
            <h2 className="text-2xl font-semibold mb-2">Partnership Opportunities</h2>
            <p>Explore partnership opportunities with BARK Protocol. Collaborate with us to expand your reach and innovate within the Solana ecosystem.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
