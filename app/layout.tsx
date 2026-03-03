import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Agent - Passive Income with Referrals",
  description: "Earn passive income with your referral links",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">UI Agent</h1>
            <ul className="flex gap-6">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
              <li><a href="/settings" className="hover:text-gray-300">Settings</a></li>
            </ul>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}