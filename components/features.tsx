import { ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure Transactions',
    description: 'All transactions are secured by blockchain technology.',
  },
  {
    icon: Zap,
    title: 'Fast Minting',
    description: 'Create and list your NFTs quickly and easily.',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Join a thriving community of artists and collectors.',
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-white dark:text-white">Why Choose BARK</h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            BARK offers a unique NFT marketplace experience with cutting-edge features designed to empower artists and collectors alike. Discover why BARK is the go-to platform for NFT enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-gray-900 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <feature.icon className="w-16 h-16 mb-6 text-[#D0C8B9]" />
              <h3 className="text-xl font-semibold mb-3 text-white dark:text-white">{feature.title}</h3>
              <p className="text-gray-300 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

