import type { FC } from "react"

export const BlogPostCard:FC=()=>{
    return(
            <div className="shadow-md border border-gray-800 rounded-lg max-w-sm mb-5">
                <a href="#">
                    <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="font-normal text-gray-500 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <button className="text-background bg-yellow-500 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                        Read more
                    </button>
                </div>
            </div>
    );
}