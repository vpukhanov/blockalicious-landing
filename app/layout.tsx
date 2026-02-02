import type { Metadata } from "next";
import { Crimson_Pro, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blockalicious - Privacy-First Website Blocker for Safari",
  description:
    "Block distracting websites in Safari without compromising your privacy. On-device blocking, no data collection, completely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${manrope.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
