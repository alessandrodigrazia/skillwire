import { getTranslations } from "next-intl/server";

export default async function PrivacyPage() {
  const t = await getTranslations("privacyPage");

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          {t("lastUpdated")}
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s1Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s1P1")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s1P2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s2Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s2P1")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s3Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s3P1")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s3P2")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s3P3")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s4Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s4P1")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s4P2")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s4P3")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s5Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s5P1")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s5P2")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s5P3")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s6Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s6P1")}</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
              <li>{t("s6P2")}</li>
              <li>{t("s6P3")}</li>
              <li>{t("s6P4")}</li>
              <li>{t("s6P5")}</li>
              <li>{t("s6P6")}</li>
              <li>{t("s6P7")}</li>
            </ul>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s6P8")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s7Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s7P1")}</p>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s7P2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary">{t("s8Title")}</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">{t("s8P1")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
