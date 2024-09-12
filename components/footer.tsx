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
        <Link href="https://t.me/bark_protocol" target="_blank" rel="noreferrer" aria-label="Telegram">
          <FaTelegramPlane className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://twitter.com/bark_protocol" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://instagram.com/bark.protocol" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://medium.com/@bark_protocol" target="_blank" rel="noreferrer" aria-label="Medium">
          <FaMediumM className="text-2xl text-gray-400 hover:text-gray-6" />
        </Link>
      </div>
      <div className="text-sm mt-6">
        <p>&copy; 2024 BARK Protocol. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
