import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillwire — Professional Skills for Claude Code",
  description:
    "Buy once, use forever. Production-ready skills for Claude Code — from B2B sales methodology to career coaching to workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
