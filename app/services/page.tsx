import { ServiceFrontend } from "@/components/services/frontend";
import { ServiceHero } from "@/components/services/hero";
import { ServiceUI } from "@/components/services/ui-ux";
import { WhatDoYouWant } from "@/components/services/what-do-you-want";
import { WhyUs } from "@/components/services/why-us";




export default function Services(){
    return (
        <>
            <ServiceHero />
            <ServiceFrontend />
            <ServiceUI />
            <WhatDoYouWant />
            <WhyUs />
        </>
    );
}