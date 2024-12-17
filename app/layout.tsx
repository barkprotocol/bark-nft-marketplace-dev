import { Poppins, Syne } from 'next/font/google';
import { createClient } from '@/utils/supabase/server';
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from '@/components/header';
import Footer from "@/components/footer";

const syne = Syne({ weight: "800", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.className} ${poppins.className}`} suppressHydrationWarning>
      <body className="bg-background bg-black text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-0 items-center">
              <Header />
              <div className="flex flex-col gap-20 max-w-8xl p-5">
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

