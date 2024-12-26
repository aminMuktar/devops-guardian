import { FC } from "react";
import { Sparkles } from "./sparkles";


export const CallToAction:FC =() =>{
    return (
        <>
        <div className="w-screen overflow-hidden">
          <div className="relative  h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100  after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
            <Sparkles
              density={400}
              size={1.4}
              direction="top"
              className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
            />
          </div>
          <div className="mx-auto -mt-52  w-screen max-w-2xl relative">
            <div className="bg-white backdrop-blur-lg border border-gray-800 p-4  w-28 h-28 mx-auto grid place-content-center rounded-full">
              <div className=" w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-yellow-300 rounded-lg before:absolute relative before:w-full before:h-full before:bg-yellow-500 before:rounded-lg before:-top-2 before:-left-2"></div>
              
            </div>
          </div>
          <article className="text-white  pt-2 w-2/3 mx-auto block text-center relative ">
            Empowering businesses with comprehensive software solutions, we specialize in development, DevOps, and design to bring your ideas to life with innovation and efficiency.
          </article>
        </div>
      </>

    );
}
