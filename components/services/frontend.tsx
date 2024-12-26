import { FC } from "react";


export const ServiceFrontend: FC = () => {
  return (
    <>
    <section 
        className=""
    >
        <div className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">You need Frontend?</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-sm ">
                Our frontend development team specializes in building responsive, intuitive, and visually appealing websites and applications.
                </p> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/images/frontend-illustration.png" alt="front end illustration" />
            </div>                
        </div>
    </section>
    </>
  );
};
