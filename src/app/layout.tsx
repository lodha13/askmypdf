import Navbar from "@/components/Navbar";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Provider";
import { AuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className="light">
        <Providers>
          <body
            className={cn(
              "min-h-screen font-sans antialiased grainy",
              inter.className
            )}
          >
            <Toaster />
            <Navbar />
            {children}
          </body>
        </Providers>
      </html>
    </AuthProvider>
  );
}
