'use client'
import type { FC } from "react";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
import {
  Bars2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {  PhoneIcon } from '@heroicons/react/20/solid'



export const Header:FC = () =>{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 w-full z-50 bg-[#0a0a0a] bg-opacity-50 backdrop-blur-lg drop-shadow-lg border-b border-b-[0.2px] border-b-slate-900">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/favicon.ico" className="h-10 w-10 rounded-full" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <Bars2Icon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/services" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
              services
            </a>
            <a href="/blog" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ">
              Blog
            </a>
            <a href="/about" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ">
              About
            </a>
            <a href="/projects" className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ">
              Projects
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-yellow-500 text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
              contact us
            </a>
            
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="/favicon.ico" className="h-10 w-10 rounded-full" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-900">
                <div className="space-y-2 py-6">
                  <a
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                  >
                    services
                  </a>
                  <a
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                  >
                    Blog
                  </a>
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                  >
                    About
                  </a>
                  <a
                    href="projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-900"
                  >
                    Projects
                  </a>
                </div>
                <div className="py-6">
                    <a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-yellow-500 text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <PhoneIcon
                    className="text-black"
                    width={16}
                    height={16}
                    />
                    contact us
                    </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    );
} 