"use client";

import Link from "next/link";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaMediumM } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full flex flex-col items-center border-t border-foreground/10 py-16 bg-background">
    <div className="w-full max-w-5xl flex flex-col items-center gap-6 text-center">
      <div className="text-sm font-semibold">
        <p>Follow Us</p>
      </div>
      <div className="flex gap-4">
        <Link href="https://t.me/bark_protocol" target="_blank" rel="noreferrer" aria-label="Follow us on Telegram">
          <FaTelegramPlane className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://twitter.com/bark_protocol" target="_blank" rel="noreferrer" aria-label="Follow us on Twitter">
          <FaTwitter className="text-2xl text-gray-400 hover:text-blue-500" />
        </Link>
        <Link href="https://instagram.com/bark.protocol" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
          <FaInstagram className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://medium.com/@barkprotocol" target="_blank" rel="noreferrer" aria-label="Follow us on Medium">
          <FaMediumM className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
      </div>
      <p className="text-xs mt-4">&copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.</p>
      <div className="flex gap-4 mt-4 text-xs">
        <Link href="/terms-of-use" className="hover:underline" aria-label="Terms of Use">Terms of Use</Link>
        <Link href="/disclaimer" className="hover:underline" aria-label="Disclaimer">Disclaimer</Link>
      </div>
    </div>
  </footer>
);

export { Header, Footer };
