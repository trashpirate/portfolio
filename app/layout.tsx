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
  description: "Portoflio Website",
  applicationName: "Nadina Oates",
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://nadinaoastes.com/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://nadinaoastes.com",
    title: "Nadina Oates",
    description: "Portoflio Website",
    siteName: "Nadina Oates",
    images: [
      {
        url: "https://nadinaoastes.com/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={globalFont.className}>
      <body>{children}</body>
    </html>
  );
}
