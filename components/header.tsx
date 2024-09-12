"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaMediumM } from "react-icons/fa";

const logoDarkUrl = "https://ucarecdn.com/b8f69bea-d5a8-4683-b6d9-bc07cf076100/barklogodark.png";
const logoLightUrl = "https://ucarecdn.com/801d46ca-f6d7-4661-9160-e14022ae0937/barklogolight.svg";

const Header = () => {
  const { theme } = useTheme();

  return (
    <nav className="w-full flex justify-center border-b border-foreground/10 h-16 bg-background">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/" aria-label="Home">
            <Image
              src={theme === "dark" ? logoDarkUrl : logoLightUrl}
              alt="BARK Logo"
              width={120}
              height={60}
              className="cursor-pointer"
              priority
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/membership" className="hover:underline">Membership</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
          </div>
        </div>
        <div className="flex gap-4 ml-auto items-center">
          <Link
            href="/sign-in"
            className={`py-2 px-4 rounded-md ${theme === "dark" ? "bg-gray-600 text-white hover:bg-gray-900" : "bg-gray-700 text-white hover:bg-gray-600"}`}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className={`py-2 px-4 rounded-md ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-100" : "bg-gray-200 text-black hover:bg-gray-100"}`}
          >
            Sign Up
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

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
          <FaTwitter className="text-2xl text-gray-400 hover:text-blue-500" />
        </Link>
        <Link href="https://instagram.com/bark.protocol" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://medium.com/@barkprotocol" target="_blank" rel="noreferrer" aria-label="Medium">
          <FaMediumM className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
      </div>
      <p className="text-xs mt-4">&copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.</p>
      <div className="flex gap-4 mt-4 text-xs">
        <Link href="/terms-of-use" className="hover:underline" aria-label="Terms of Use">
          Terms of Use
        </Link>
        <Link href="/disclaimer" className="hover:underline" aria-label="Disclaimer">
          Disclaimer
        </Link>
      </div>
    </div>
  </footer>
);

export { Header, Footer };
