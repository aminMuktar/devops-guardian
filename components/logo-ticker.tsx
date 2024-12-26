import { FC } from "react";
import { LogoCarousel } from "./logo-carousel";




export const LogoTicker:FC = () =>{
    return(
        <>
            <div className="py-[72px] sm:py-24 mx-auto flex max-w-7xl items-center">
                <div className="container">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-16">
                    <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-300 to-slate-100">
                            Our tech Stacks
                        </span>
                    </h2>
                    <LogoCarousel />
                </div>
            </div>
        </>
    );
}