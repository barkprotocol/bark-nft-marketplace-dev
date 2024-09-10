# BARK Protocol | NFT Marketplace

Welcome to the BARK Protocol NFT Marketplace! This project is a comprehensive platform for managing and claiming exclusive BARK and Solana SPL tokens through various airdrop campaigns. Built with Next.js and optimized for performance, it leverages Solana's blockchain technology and Supabase for seamless user authentication and data management.

![BARK Marketplace UI](.github/assets/screenshot.png)

## Features

- **Explore NFTs:** Discover and view a collection of exclusive NFTs.
- **Mint NFTs:** Mint new NFTs if you are a premium member.
- **Stake NFTs:** Stake your NFTs to earn rewards and participate in governance.
- **Upgrade Membership:** Upgrade to premium to unlock additional features and rewards.
- **Responsive Design:** Fully responsive and optimized for both desktop and mobile views.
- **Theming:** Supports both light and dark mode for a tailored experience.
- **Supabase Integration:** Auth configured to use cookies with `supabase-ssr` for seamless authentication.
- **Styling with Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Components with shadcn/ui:** Prebuilt UI components for efficient and consistent development.

## Frameworks and Technologies

- **Next.js**: Full-stack React framework for building modern web applications, utilizing both the App Router and Pages Router, as well as Middleware, Client, and Server functionalities.
- **Supabase**: For authentication, user management, and database handling, integrated with `supabase-ssr` to manage cookies securely.
- **Tailwind CSS**: Utility-first CSS framework to style the application quickly and effectively.
- **shadcn/ui**: A set of prebuilt UI components to help developers build faster with React and Tailwind.
- **Vercel**: Cloud platform for serverless deployment, integrating effortlessly with Next.js and Supabase.

## Deployment

The project is configured for deployment with [Vercel](https://vercel.com). During deployment, environment variables such as Supabase keys and Vercel configuration are automatically set.

## Installation

To get started locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/barkprotocol/nft-marketplace.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nft-marketplace
   ```

3. Install dependencies using your preferred package manager:

   ```bash
   pnpm install
   # or
   yarn install
   ```

4. Set up environment variables by creating a `.env.local` file in the root directory and adding the following:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   VERCEL_URL=your-vercel-url
   ```

5. Run the development server:

   ```bash
   pnpm run dev
   # or
   yarn dev
   ```

   Your app will be available at `http://localhost:3000`.

## Usage

- **Explore Collection:** Navigate to `/collection` to explore the available NFT collection.
- **Mint NFT:** As a premium member, go to `/mint` to mint new NFTs.
- **Upgrade Membership:** To unlock premium features, visit `/upgrade`.

## Contributing

We welcome contributions! To contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push your branch (`git push origin feature/your-feature`).
6. Open a Pull Request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Supabase](https://supabase.io/) - Database and authentication solution.
- [Solana](https://solana.com/) - Blockchain platform for fast, decentralized operations.
- [Next.js](https://nextjs.org/) - Framework for building server-rendered React applications.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for modern UI design.
- [shadcn/ui](https://shadcn.dev) - Prebuilt UI components for React.
- [Vercel](https://vercel.com) - Cloud platform for deployment and scalability.