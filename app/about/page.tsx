import { FC } from 'react';
import Head from 'next/head';
import { FaInfoCircle, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';

const About: FC = () => {
  return (
    <>
      <Head>
        <title>About Us | BARK Protocol</title>
        <meta name="description" content="Learn more about BARK Protocol, our mission, vision, and the innovative team behind the project." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">About Us</h1>
        <p className="mb-12 text-center text-lg text-gray-600">
          At BARK Protocol, we are committed to transforming the digital asset landscape through innovative solutions on the Solana blockchain. Learn more about our mission, vision, growth, and technology below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <FaInfoCircle className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to revolutionize the management and utilization of digital assets by leveraging cutting-edge technologies on the Solana blockchain.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <FaUsers className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
            <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We envision a dynamic ecosystem where digital assets are seamlessly integrated, managed, and enhanced through community-driven innovation and collaboration.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <FaChartLine className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
            <h2 className="text-xl font-semibold mb-3">Our Growth</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Explore our journey and key milestones as we continue to grow and push the boundaries of blockchain technology and digital asset management.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <FaCogs className="text-5xl mb-4" style={{ color: '#D0BFB4' }} />
            <h2 className="text-xl font-semibold mb-3">Our Technology</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Discover the advanced technologies and solutions we employ to drive innovation and deliver exceptional value to our users on the Solana blockchain.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
