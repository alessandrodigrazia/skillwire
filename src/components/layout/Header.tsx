"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { ShoppingCart, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/lib/store/cart";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCart, count } = useCartStore();

  const navLinks = [
    { href: "/skills" as const, label: t("skills") },
    { href: "/bundles" as const, label: t("bundles") },
    { href: "/how-it-works" as const, label: t("howItWorks") },
    { href: "/blog" as const, label: t("blog") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-text-primary">
            Skillwire
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.href
                  ? "text-accent"
                  : "text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <LanguageToggle />

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
            aria-label={t("cart")}
          >
            <ShoppingCart size={20} />
            {count() > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-bg">
                {count()}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-surface ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageToggle() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-1">
      <Globe size={16} className="text-text-secondary" />
      <Link
        href={pathname || "/"}
        locale="en"
        className={`text-xs font-medium transition-colors hover:text-text-primary ${
          locale === "en" ? "text-accent" : "text-text-secondary"
        }`}
      >
        EN
      </Link>
      <span className="text-text-secondary">/</span>
      <Link
        href={pathname || "/"}
        locale="it"
        className={`text-xs font-medium transition-colors hover:text-text-primary ${
          locale === "it" ? "text-accent" : "text-text-secondary"
        }`}
      >
        IT
      </Link>
    </div>
  );
}
