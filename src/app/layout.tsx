import type { Metadata } from "next";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Alexander Wells — Software Engineer",
  description: 
    "Graduate software engineer specialising in AI & ML. Based in NZ, open to opportunities worldwide.",
  metadataBase: new URL("https://alexanderwells.dev"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Alexander Wells — Software Engineer",
    description:
      "Graduate software engineer specialising in AI & ML. Based in NZ, open to opportunities worldwide.",
    url: "https://alexanderwells.dev",
    siteName: "Alexander Wells",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${figtree.variable} ${jetbrainsMono.variable} font-figtree`}
      >
        {children}
      </body>
    </html>
  );
}