import { FC } from "react";
import Image from "next/image";


export const Hero:FC = () =>{
  return (
    <>
    
        <div className="mt-12 w-full h-full flex flex-col justify-center items-center overflow-hidden ">
            <div className="pt-10 sm:pt-10 lg:pt-30 w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
                        <span className="block text-transparent leading-snug bg-clip-text bg-gradient-to-r from-slate-500 via-slate-300 to-slate-100">
                            Building Bridges Between Vision and Reality
                        </span>
                        </h1>
                        <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-300">Your Partner in SaaS Development and DevOps</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <Image src="/dashboardh.svg" alt="" width={500} height={300} className="w-2/3 lg:w-full" />
                </div>
            </div>
        </div>    
    </>
  );
}

