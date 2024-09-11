import { Poppins, Syne } from "next/font/google";
import { createClient } from '@/utils/supabase/server'; // Ensure this import is used
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Header, Footer } from "@/components/header";

// Define the default URL for metadata
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "BARK",
  description: "NFT Marketplace",
};

// Import fonts with specific weights
const syne = Syne({ weight: "800", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.className} ${poppins.className}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <Header />
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
