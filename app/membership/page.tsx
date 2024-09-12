import { FC } from 'react';
import Head from 'next/head';
import { FaLock, FaStar, FaGift, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const heroImageUrl = "https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png";

const Membership: FC = () => {
  return (
    <>
      <Head>
        <title>Membership | BARK Protocol</title>
        <meta name="description" content="Explore the benefits and exclusive features of becoming a BARK Protocol member. Discover our membership tiers and how you can join our community." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] mb-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroImageUrl}
              alt="Membership Hero"
              layout="fill"
              objectFit="cover"
              className="object-center"
              priority
            />
          </div>
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Join Our Membership</h1>
            <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Unlock exclusive benefits and become an integral part of the BARK Protocol community. Explore our membership tiers and discover what we have to offer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/upgrade" className="py-3 px-6 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Upgrade
              </Link>
              <Link href="/sign-up" className="py-3 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Features Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white text-center mb-12">Membership Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <FaLock className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Exclusive Access</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Gain access to exclusive content, early announcements, and special events only available to our members.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <FaStar className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Premium Features</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enjoy premium features and tools that enhance your experience with BARK Protocol, including advanced analytics and management options.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <FaGift className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Special Rewards</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Receive exclusive rewards and benefits, including discounts, giveaways, and early access to new features.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
              <FaCheckCircle className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Community Involvement</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Become an integral part of our community. Participate in discussions, contribute to development, and shape the future of BARK Protocol.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white text-center mb-12">Why Become a Member?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Enhanced Security</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our membership provides enhanced security features to protect your assets and personal information, ensuring a safe and secure experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Exclusive Content</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Access exclusive articles, guides, and resources designed to help you maximize your engagement with the BARK Protocol and the Solana ecosystem.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Priority Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Receive priority support from our dedicated team, ensuring that your questions and issues are addressed promptly and effectively.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Membership;
