import { FC } from "react";

export const ServiceHero: FC = () => {
  return (
    <>
    <section 
        className="mt-16 sm:mt-24 bg-cover bg-center"
        style={{
            backgroundImage: "url('/images/service-hero.png')",
        }}
    >
        <div className="grid max-w-screen-xl px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Our services</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl ">We offer a comprehensive suite of services designed to help you build, scale, and optimize your digital presence.</p>
                
                <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100">
                    Contact us
                </a>  
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="rounded-lg w-full h-full" src="/images/hero-service.jpeg" alt="" />
            </div>                
        </div>
    </section>
    </>
  );
};
