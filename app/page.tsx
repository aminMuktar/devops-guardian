"use client"
import { CallToAction } from "@/components/cat";
import { DesignFeature } from "@/components/design-feature";
import { Feature } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";

export default function Home() {
  return (
    <>
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
      <Hero />
    </div>
    <div className="overflow-x-hidden max-w-7xl">
        <LogoTicker />
        <DesignFeature />
        <Feature />
        <CallToAction />
      </div>
    </>
  );
}

