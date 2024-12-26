"use client"
import { CallToAction } from "@/components/cat";
import { DesignFeature } from "@/components/design-feature";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";


export default function Home() {
  return (
    <>
        <Hero />
        <LogoTicker />
        <DesignFeature />
        {/* <Feature /> */}
        <CallToAction />
    </>
  );
}

