"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { bundles } from "@/lib/data/bundles";
import { BundleCard } from "@/components/bundles/BundleCard";

export default function BundlesPage() {
  const i18n = useTranslations("bundlePage");

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {i18n("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-[42rem] text-lg text-text-secondary">
            {i18n("subtitle")}
          </p>
        </motion.div>

        {/* Bundles grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle, i) => (
            <BundleCard key={bundle.slug} bundle={bundle} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
