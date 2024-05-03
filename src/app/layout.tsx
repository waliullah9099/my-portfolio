import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD WALIULLAH",
  description: "Developed by MD WALIULLAH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
