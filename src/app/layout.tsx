import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";
import ReactQueryProvider from "@/components/ReactQueryProvider";

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
        <ReactQueryProvider>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}