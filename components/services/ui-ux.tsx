import { FC } from "react";


export const ServiceUI: FC = () => {
  return (
    <>
        <div className="py-5 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
        <p className="inline-flex justify-between items-center py-1 px-1 pr-4 pl-4 mb-7 text-lg text-yellow-500" >
            Design
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">UI/UX Design</h1>
        <p className="mb-8 text-gray-300 lg:text-sm sm:px-16 xl:px-48">
        Great user experiences start with outstanding design. Our UI/UX design team focuses on creating visually appealing, user-centric interfaces that ensure ease of use and meaningful interaction.
        </p>
        
        <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-auto bg-white text-black rounded-full inline-flex items-center justify-center px-12 py-5">                    
                    <div className="text-center rtl:text-right">
                        <div className="mb-1 text-xs">User Research</div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white text-black rounded-full inline-flex items-center justify-center px-12 py-5">
                    <div className="text-center rtl:text-right">
                        <div className="mb-1 text-xs">Wireframing & Prototyping</div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white text-black rounded-full inline-flex items-center justify-center px-12 py-5">
                    <div className="text-center rtl:text-right">
                        <div className="mb-1 text-xs">UI Design</div>
                    </div>
                </div>   
        </div> 
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-auto bg-white text-black rounded-full inline-flex items-center justify-center px-12 py-5">
                <div className="text-center rtl:text-right">
                    <div className="mb-1 text-xs">UX Strategy</div>
                </div>
            </div>
            <div className="w-full sm:w-auto bg-white text-black rounded-full inline-flex items-center justify-center px-12 py-5">
                <div className="text-center rtl:text-right">
                    <div className="mb-1 text-xs">Usability Testing</div>
                </div>
            </div>  
        </div>
    </div>
    </>
  );
};
