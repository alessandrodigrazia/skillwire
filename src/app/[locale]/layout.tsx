import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isIt = locale === "it";

  return {
    metadataBase: new URL("https://skillwire.ai"),
    title: isIt
      ? "Skillwire — Skill Professionali per Claude Code"
      : "Skillwire — Professional Skills for Claude Code",
    description: isIt
      ? "Acquista una volta, usa per sempre. Skill production-ready per Claude Code — dalla metodologia di vendita B2B al coaching professionale all'automazione workflow."
      : "Buy once, use forever. Production-ready skills for Claude Code — from B2B sales methodology to career coaching to workflow automation.",
    openGraph: {
      siteName: "Skillwire",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: "Skillwire",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@skillwireai",
    },
    alternates: {
      canonical: `https://skillwire.ai/${locale}`,
      languages: {
        en: "https://skillwire.ai/en",
        it: "https://skillwire.ai/it",
        "x-default": "https://skillwire.ai/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-bg text-text-primary`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </NextIntlClientProvider>
        <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
