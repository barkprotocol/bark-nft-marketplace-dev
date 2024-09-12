// pages/contact.tsx
import { FC } from 'react';
import Head from 'next/head';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | BARK Protocol</title>
        <meta name="description" content="Get in touch with the BARK Protocol team for support, inquiries, or partnerships." />
      </Head>
      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] mb-16 bg-white dark:bg-gray-900 bg-opacity-70">
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">Contact Us</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Have questions or need support? Reach out to us using the contact form below or through our contact details.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"/>
              </div>
              <button type="submit" className="py-3 px-6 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">Send Message</button>
            </form>
          </div>
        </section>

        {/* Additional Contact Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Other Ways to Reach Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            You can also get in touch with us via:
          </p>
          <ul className="text-gray-700 dark:text-gray-300">
            <li>Email: <a href="mailto:contact@barkprotocol.net" className="text-blue-500">contact@barkprotocol.net</a></li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Barkers Street, Solana City, Globe</li>
          </ul>
        </section>

        {/* Social Media Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://twitter.com/bark_protocol" className="text-gray-500">Twitter</a>
            <a href="https://discord.com/invite/barkprotocol" className="text-gray-500">Discord</a>
            <a href="https://github.com/barkprotocol" className="text-gray-500">GitHub</a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="font-medium text-gray-800 dark:text-white cursor-pointer">What is BARK Protocol?</summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                BARK Protocol is a blockchain platform offering staking, NFT minting, and other features built on Solana.
              </p>
            </details>
            <details className="group">
              <summary className="font-medium text-gray-800 dark:text-white cursor-pointer">How do I claim my airdrop?</summary>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Airdrops can be claimed via the "Airdrops" section in the dashboard once you have connected your Solana wallet.
              </p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
