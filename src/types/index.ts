export type CategorySlug =
  | "sales"
  | "career"
  | "content"
  | "automation"
  | "devtools";

export type BadgeType =
  | "best-seller"
  | "new"
  | "popular"
  | "premium"
  | "flagship"
  | "niche"
  | "lead-magnet"
  | null;

export interface Skill {
  slug: string;
  name: string;
  technicalName: string;
  tagline: string;
  category: CategorySlug;
  tags: string[];
  price: number;
  currency: "EUR";
  isFree: boolean;
  isBundleOnly: boolean;
  badge: BadgeType;
  icon: string;
  filesCount: number;
  launchPhase: 1 | 2 | 3;
  complexity: 1 | 2 | 3 | 4 | 5;
  bundleSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  averageRating: number;
  reviewCount: number;
}

export interface Bundle {
  slug: string;
  name: string;
  tagline: string;
  skillSlugs: string[];
  originalPrice: number;
  bundlePrice: number;
  savingsPercent: number;
  badge: BadgeType;
  metaTitle: string;
  metaDescription: string;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  type: "skill" | "bundle";
  icon?: string;
}
