import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn-Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
          <Provider>
            <Navbar />
            {children}
          </Provider>
      </body>
    </html>
  );
}
