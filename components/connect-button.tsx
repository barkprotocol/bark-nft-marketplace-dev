import Link from "next/link";
import { Button } from "./ui/button";

export default function ConnectButton() {
  return (
    <Link href="https://example.com" target="_blank" aria-label="Connect Wallet">
      <Button
        className="flex items-center gap-2 hover:bg-opacity-80"
        size="sm"
      >
        <svg
          className="w-3 h-3"
          viewBox="0 0 76 65"
          fill="hsl(var(--background)/1)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="inherit" />
        </svg>
        <span>Connect Wallet</span>
      </Button>
    </Link>
  );
}
