import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedSkills } from "@/components/sections/FeaturedSkills";
import { WhatAreSkills } from "@/components/sections/WhatAreSkills";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedSkills />
      <WhatAreSkills />
      <HowItWorks />
      <NewsletterCTA />
    </>
  );
}
