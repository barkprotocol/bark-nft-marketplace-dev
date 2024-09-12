import { FC } from 'react';
import Head from 'next/head';
import { FaGift, FaStar, FaCoins, FaBullhorn } from 'react-icons/fa';

const Services: FC = () => {
  return (
    <>
      <Head>
        <title>Services | BARK Protocol</title>
        <meta name="description" content="Explore the services offered by BARK Protocol, including exclusive membership options, NFT minting, and reward claiming." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto bg-cover bg-center" style={{ backgroundImage: 'url(https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png)' }}>
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] mb-16 bg-white dark:bg-gray-900 bg-opacity-70">
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6 
              shadow-md" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our exclusive services, from club memberships and NFT minting to claiming rewards and special offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#membership" className="py-2 px-3 bg-black text-white rounded-md shadow-md hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">Learn More</a>
              <a href="#minting" className="py-2 px-3 bg-gray-200 text-black rounded-md shadow-md hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">Get Started</a>
            </div>
          </div>
        </section>

        {/* Services Content Section */}
        <section id="services" className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaStar className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="Club Membership Icon" />
              <h2 className="text-lg md:text-xl font-semibold mb-3">Club Membership</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Join our exclusive club to access premium features, early access to NFTs, and special rewards.
              </p>
              <a href="/membership" className="py-2 px-4 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">Explore Membership</a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaGift className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="NFT Minting Icon" />
              <h2 className="text-lg md:text-xl font-semibold mb-3">Mint NFTs</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mint your own NFTs with ease and become part of the BARK ecosystem. Explore our collection and create unique assets.
              </p>
              <a href="/mint" className="py-2 px-4 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">Start Minting</a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaCoins className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="Claim Rewards Icon" />
              <h2 className="text-lg md:text-xl font-semibold mb-3">Claim Rewards</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Claim your rewards by participating in our ecosystem. Enjoy benefits and exclusive offers tailored for our community.
              </p>
              <a href="/rewards" className="py-2 px-4 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-sm md:text-base">Claim Rewards</a>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section id="benefits" className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaBullhorn className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="Community Engagement Icon" />
              <h3 className="text-lg md:text-xl font-semibold mb-4">Community Engagement</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Engage with our vibrant community, participate in exclusive events, and benefit from collaborative growth opportunities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaStar className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="Top Technology Icon" />
              <h3 className="text-lg md:text-xl font-semibold mb-4">Top-Notch Technology</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Leverage cutting-edge technology for your NFT creations and transactions, ensuring a seamless and high-performance experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6 flex flex-col items-center text-center">
              <FaGift className="text-4xl mb-4" style={{ color: '#D0BFB4' }} aria-label="Exclusive Rewards Icon" />
              <h3 className="text-lg md:text-xl font-semibold mb-4">Exclusive Rewards</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Access a range of exclusive rewards, including limited-edition NFTs, discounts, and special promotions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
