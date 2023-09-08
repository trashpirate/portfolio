import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const globalFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Nadina Oates",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={globalFont.className}>
      <body>{children}</body>
    </html>
  );
}
