import { FC } from "react";

export const WhyUs: FC = () => {
  return (
    <>
    <section 
        className=""
    >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-12">
        
        <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-center leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Why choose us?</h1>
        <p className="mb-8 text-gray-300 text-center lg:text-sm sm:px-16 xl:px-48">
            {"Whether you're looking to build a user-friendly website, robust backend systems, or complete end-to-end solutions, our expert team is here to make your vision a reality."}
        </p>
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-1">
        <img className="rounded-lg w-full bg-white" src="/images/teams.png" alt="" />
        <div className="flex flex-col gap-8">
            <div className="px-5">
                <h3 className="mb-2 text-2xl font-bold text-white">Expert Team</h3>
                <p>Experienced professionals with a proven track record in delivering quality projects.</p>
            </div>
            <div className="px-5">
                <h3 className="mb-2 text-2xl font-bold text-white">Custom Solutions</h3>
                <p>Tailored strategies designed to meet your specific business goals.</p>
            </div>
            <div className="px-5">
                <h3 className="mb-2 text-2xl font-bold text-white">End-to-End Support</h3>
                <p>From initial consultation to deployment and beyond, we’re with you every step of the way.</p>
            </div>
        </div>
        </div>

    </div>
    </section>
    </>
  );
};
