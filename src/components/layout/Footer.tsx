import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("products"),
      links: [
        { label: t("allSkills"), href: "/skills" as const },
        { label: t("bundles"), href: "/bundles" as const },
        { label: t("freeResources"), href: "/skills/skill-creator-guru" as const },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("blog"), href: "/blog" as const },
        { label: t("howItWorks"), href: "/how-it-works" as const },
        { label: t("whatAreSkills"), href: "/what-are-claude-skills" as const },
        { label: t("about"), href: "/about" as const },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("terms"), href: "/legal/terms" as const },
        { label: t("privacy"), href: "/legal/privacy" as const },
        { label: t("refund"), href: "/legal/refund" as const },
        { label: t("disclaimer"), href: "/legal/disclaimer" as const },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-text-primary">
              Skillwire
            </span>
            <p className="mt-2 text-sm text-text-secondary">{t("tagline")}</p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-text-primary">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-text-secondary">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
