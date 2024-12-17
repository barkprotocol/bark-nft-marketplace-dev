import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
            alt="BARK Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">BARK</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/marketplace" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/collection" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="outline">Connect Wallet</Button>
      </div>
    </header>
  );
}

