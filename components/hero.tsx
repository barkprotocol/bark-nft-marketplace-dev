import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png"
        alt="BARK NFT Marketplace Background"
        layout="fill"
        objectFit="contain"
        quality={100}
        priority
        className="object-center"
      />
      <div className="absolute inset-0  bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 shadow-sm">
          Welcome to BARK NFT Marketplace
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover, collect, and trade unique digital assets in the world of blockchain
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/marketplace">Explore Marketplace</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow bg-white bg-opacity-20 hover:bg-opacity-30">
            <Link href="/create">Create NFT</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

