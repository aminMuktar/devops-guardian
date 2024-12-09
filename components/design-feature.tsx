"use client"
import { FC } from "react";
import Image from 'next/image';
import {motion , useScroll, useTransform} from 'framer-motion';
import { useEffect, useRef } from "react";

export const DesignFeature:FC =()=>{
    const appImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ["start end", "end end"]

    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);
    return (
        <>
        <div className="py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
          <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-300 to-slate-100">
            We Do the Coding, You Do the Winning
          </span>
        </h2>
        <div className='max-w-xl mx-auto'>
        </div>
        <div className="flex justify-center">
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        <Image src="/images/Transaksi.svg" width={800} height={700} ref={appImage} alt="app screen" className="mt-14" />
        </motion.div>
        </div>

      </div>

    </div>
        </>
    );
}