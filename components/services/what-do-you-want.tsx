import { FC } from "react";
import { what_do_you_want } from "@/constants/wdyw"

export const WhatDoYouWant: FC = () => {
  return (
    <>
    <section 
        className=""
    >
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <p className="inline-flex justify-between items-center py-1 px-1 pr-4 pl-4 mb-7 text-lg text-yellow-500" >
            learn about us
        </p>
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">What do you want?</h1>
        
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {what_do_you_want.map((wdyw,key)=>(
            <div key={key} className="flex flex-col items-center pt-5 max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            <div>
                <img className="rounded-lg" src={`${wdyw.img_path}`} alt="" />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{`${wdyw.title}`}</h5>
                </div>
            </div>
        </div>
          ))}
          
        </div>

    </div>
    </section>
    </>
  );
};
