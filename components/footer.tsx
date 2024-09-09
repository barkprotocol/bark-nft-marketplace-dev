// components/footer.tsx

import Link from 'next/link';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { FaTelegramPlane, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center border-t border-foreground/10 mx-auto text-center text-xs gap-8 py-8 bg-background">
      <div className="w-full max-w-5xl flex flex-col items-center gap-4">
        <div className="text-sm font-semibold">
          <p>Follow Us</p>
        </div>
        <div className="flex gap-4">
          <Link href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="text-2xl hover:text-blue-500" />
          </Link>
          <Link href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </Link>
          <Link href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </Link>
          <Link href="https://medium.com/@yourmedium" target="_blank" rel="noreferrer">
            <FaMediumM className="text-2xl hover:text-black" />
          </Link>
        </div>
        <p className="text-xs mt-4">&copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.</p>
      </div>
      <div className="w-full max-w-5xl flex justify-between text-xs px-5 mt-4">
        <div className="flex gap-4">
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/disclaimer" className="hover:underline">
            Disclaimer
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}
