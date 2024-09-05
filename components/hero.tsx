import { ReactNode } from 'react';

export default function Hero({
  badge,
  title,
  description,
  children,
}: {
  badge?: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-dark-grey text-white py-12 px-6 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        {badge && (
          <div className="bg-sand text-black px-4 py-2 rounded-full inline-block mb-4">
            {badge}
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
        <div className="flex justify-center gap-4">
          <a
            href="/collection"
            className="bg-light-gray text-black py-2 px-4 rounded-lg hover:bg-dark-grey transition"
          >
            Collection
          </a>
          <a
            href="/mint"
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-dark-grey transition"
          >
            Mint NFT
          </a>
        </div>
        {children}
      </div>
    </section>
  );
}
