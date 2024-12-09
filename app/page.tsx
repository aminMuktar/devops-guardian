"use client"
import { CallToAction } from "@/components/cat";
import { DesignFeature } from "@/components/design-feature";
import { Feature } from "@/components/features";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";

export default function Home() {
  return (
    <>
    <div className="container mx-auto flex flex-col gap-5">
        <Hero />
        <LogoTicker />
        <DesignFeature />
        <Feature />
        <CallToAction />
    </div>
    </>
  );
}

