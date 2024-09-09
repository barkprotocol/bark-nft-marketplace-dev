"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import ConnectButton from "@/components/connect-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { FaTelegramPlane, FaTwitter, FaInstagram, FaMediumM } from "react-icons/fa";

const logoDarkUrl = "https://ucarecdn.com/b8f69bea-d5a8-4683-b6d9-bc07cf076100/barklogodark.png";
const logoLightUrl = "https://ucarecdn.com/801d46ca-f6d7-4661-9160-e14022ae0937/barklogolight.svg";

const Header = () => {
  const { theme } = useTheme();
  const [hasEnvVars, setHasEnvVars] = useState(false);

  useEffect(() => {
    // Check if environment variables are set
    const checkEnvVars = () => {
      // Logic to check environment variables on the client
      // This is a placeholder; replace with actual logic if needed
      setHasEnvVars(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SOLANA_NETWORK);
    };

    checkEnvVars();
  }, []);

  return (
    <nav className="w-full flex justify-center border-b border-foreground/10 h-16 bg-background">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href="/">
            <Image
              src={theme === "dark" ? logoDarkUrl : logoLightUrl}
              alt="BARK Logo"
              width={120}
              height={60}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ConnectButton />
          </div>
        </div>
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
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
        <Link href="https://t.me/bark_protocol" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://twitter.com/bark_protocol" target="_blank" rel="noreferrer">
          <FaTwitter className="text-2xl text-gray-400 hover:text-blue-500" />
        </Link>
        <Link href="https://instagram.com/bark.protocol" target="_blank" rel="noreferrer">
          <FaInstagram className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
        <Link href="https://medium.com/@barkprotocol" target="_blank" rel="noreferrer">
          <FaMediumM className="text-2xl text-gray-400 hover:text-gray-600" />
        </Link>
      </div>
      <p className="text-xs mt-4">&copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.</p>
      <div className="flex gap-4 mt-4 text-xs">
        <Link href="/terms-of-use" className="hover:underline">
          Terms of Use
        </Link>
        <Link href="/disclaimer" className="hover:underline">
          Disclaimer
        </Link>
      </div>
    </div>
    <div className="mb-4">
      <ThemeSwitcher />
    </div>
  </footer>
);

export { Header, Footer };
