import { type FC } from "react";
import { images } from "@/constants/ticker-images";
import Image from "next/image";


export const LogoCarousel:FC =()=>{
    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} width={50} height={50} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {images.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} width={50} height={50} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
    );
}