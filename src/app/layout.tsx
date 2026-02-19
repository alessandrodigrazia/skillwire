import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skillwire — Professional Skills for Claude Code",
  description:
    "Buy once, use forever. Production-ready skills for Claude Code — from B2B sales methodology to career coaching to workflow automation.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skillwire",
  url: "https://skillwire.ai",
  logo: "https://skillwire.ai/logo.png",
  description:
    "Professional skill packs for Claude Code. Buy once, use forever.",
  sameAs: ["https://twitter.com/skillwireai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {children}
    </>
  );
}
