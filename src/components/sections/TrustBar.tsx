import { useTranslations } from "next-intl";
import { Terminal, Monitor, AppWindow, Laptop } from "lucide-react";

const icons = [Terminal, Monitor, AppWindow, Laptop];

export function TrustBar() {
  const t = useTranslations("trustBar");
  const items: string[] = t.raw("items");

  return (
    <section className="border-y border-border bg-surface/50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
          <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            {t("label")}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item}
                  className="flex items-center gap-2 text-text-secondary"
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
