import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
                alt="BARK Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">BARK NFT Marketplace</h2>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Empowering digital art and collectibles through blockchain technology.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Marketplace</Link></li>
              <li><Link href="/collection" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Collection</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">About</Link></li>
              <li><Link href="/terms" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Stay Connected</h3>
            <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="rounded-l-none">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} BARK Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

