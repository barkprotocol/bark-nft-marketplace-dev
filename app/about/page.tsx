// pages/about.tsx
import { FC } from 'react';
import Head from 'next/head';

const About: FC = () => {
  return (
    <>
      <Head>
        <title>About Us | BARK Protocol</title>
        <meta name="description" content="Learn more about BARK Protocol, our mission, vision, and the story behind our project." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] mb-16 bg-cover bg-center" style={{ backgroundImage: "url('https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 dark:text-gray-100 mb-6">About Us</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 dark:text-gray-200 mb-8 max-w-4xl mx-auto">
              Discover the vision, mission, and story behind BARK Protocol. Learn how we are transforming the digital asset landscape with innovative technology and a commitment to excellence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="mb-16 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              BARK Protocol began with a simple yet ambitious goal: to revolutionize the way we interact with digital assets. Founded by a team of blockchain enthusiasts, our journey started with a shared vision of creating a more transparent and user-centric digital economy.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              From our initial development phases to our current innovations, every step has been driven by our commitment to excellence and our passion for empowering users. Our story is one of resilience, innovation, and an unwavering dedication to transforming the digital asset landscape.
            </p>
          </div>
        </section>

        {/* About Content Section */}
        <section id="about-content" className="mb-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our mission is to transform blockchain asset management by providing cutting-edge solutions that enhance the creation, management, and rewards of NFTs. We are dedicated to delivering innovation that meets the evolving needs of our users.
              </p>
            </div>
            <div className="flex flex-col justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a future where blockchain technology seamlessly integrates with everyday life. By crafting innovative solutions, we aim to empower users and set new standards for how digital assets are utilized, ensuring accessibility and advancement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
