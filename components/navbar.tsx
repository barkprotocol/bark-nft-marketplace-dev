"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const logoDarkUrl = "https://ucarecdn.com/b8f69bea-d5a8-4683-b6d9-bc07cf076100/barklogodark.png";
const logoLightUrl = "https://ucarecdn.com/801d46ca-f6d7-4661-9160-e14022ae0937/barklogolight.svg";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleThemeToggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-200 shadow-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-transparent dark:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800 dark:focus:ring-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Logo and Desktop Menu */}
          <div className="flex-1 flex items-center justify-between sm:items-stretch">
            <div className="flex-shrink-0 cursor-pointer">
              <Link href="/">
                <img
                  src={theme === "dark" ? logoDarkUrl : logoLightUrl}
                  alt="BARK Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <NavLink href="/" label="Home" />
              <NavLink href="/about" label="About" />
              <NavLink href="/services" label="Services" />
              <NavLink href="/contact" label="Contact" />
              <NavLink href="/sign-in" label="Sign In" />
              <NavLink href="/sign-up" label="Sign Up" />
              <Button
                onClick={() => router.push('/upgrade')}
                className="bg-black text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 px-6 py-2 rounded-md"
              >
                Upgrade
              </Button>
              <button
                onClick={handleThemeToggle}
                className="text-gray-700 dark:text-gray-300 hover:bg-transparent dark:hover:bg-transparent p-2 rounded-md focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-10h-1M4 12H3m16.07 5.07l-.707-.707M6.93 6.93l-.707-.707m12.02 0l-.707.707m-12.02 0l-.707-.707" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-10h1m16-1h-1m-1.07-1.07l.707.707M6.93 6.93l.707.707m12.02 0l.707-.707m-12.02 0l.707.707" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} bg-gray-900 text-gray-100`} id="mobile-menu">
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-6 py-8">
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800 dark:focus:ring-gray-100"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <NavLink href="/" label="Home" mobile />
          <NavLink href="/about" label="About" mobile />
          <NavLink href="/services" label="Services" mobile />
          <NavLink href="/contact" label="Contact" mobile />
          <NavLink href="/sign-in" label="Sign In" mobile />
          <NavLink href="/sign-up" label="Sign Up" mobile />
          <Button
            onClick={() => router.push('/upgrade')}
            className="bg-black text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 px-6 py-2 rounded-md"
          >
            Upgrade
          </Button>
          <button
            onClick={handleThemeToggle}
            className="text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-10h1m16-1h-1m-1.07-1.07l.707.707M6.93 6.93l.707.707m12.02 0l.707-.707m-12.02 0l.707.707" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-9-10h1m16-1h-1m-1.07-1.07l.707.707M6.93 6.93l.707.707m12.02 0l.707-.707m-12.02 0l.707.707" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for better maintainability
const NavLink: React.FC<{ href: string; label: string; mobile?: boolean }> = ({ href, label, mobile }) => (
  <Link href={href} className={`text-gray-700 dark:text-gray-300 hover:bg-transparent dark:hover:bg-transparent px-4 py-2 rounded-md text-sm font-medium border-b-2 border-transparent hover:border-gray-800 dark:hover:border-gray-100 ${mobile ? "block" : "hidden sm:block"}`}>
    {label}
  </Link>
);

export default Navbar;
