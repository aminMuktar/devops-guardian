
import type { FC } from "react"

export const Footer:FC = () =>{
    return (
        <footer className="rounded-lg shadow bg-zinc-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img alt="" src="/favicon.ico" className="h-10 w-10 rounded-full" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Devops Guardian</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" className="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:underline me-4 md:me-6">Blog</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline me-4 md:me-6">contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://devops-guardian.dev/" className="hover:underline">Devops-guardian™</a>. All Rights Reserved.</span>
                <ul className="flex justify-center mt-5 space-x-5">
                    <li>
                        <a href="https://www.linkedin.com/company/devops-guardian" className="text-gray-500 hover:text-white ">
                        <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-8">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@devops_guardians" className="text-gray-500 hover:text-white ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-8">
                                <path fill="currentColor"
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                </path>
                            </svg>
                        </a>
                    </li>
                </ul>
            
            </div>
        </footer>
    );
}