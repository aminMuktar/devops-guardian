"use client"
import type { FC } from "react";
import { ScrollSyncPane } from 'react-scroll-sync';


interface Props{
    children: React.ReactNode;
}


export const MarkdownPreview:FC<Props> = ({
  children,
  
}) => {


  return (
    <div className="inline-block w-full overflow-auto md:flex md:flex-col md:items-center lg:items-center">
      <div className="flex h-max w-full items-center justify-between bg-tertiary-200 p-3.5 dark:bg-primary-900 md:px-3 lg:px-6">
        <span className="font-roboto text-sm uppercase tracking-widest text-secondary-500 dark:text-secondary-400">
          Preview
        </span>
      </div>
    <ScrollSyncPane>
        <div className="heading-5 heading-6 blockquote-bold orange-list-marker prose h-full w-full p-4 pb-32 prose-headings:font-roboto-slab prose-headings:text-primary-700 prose-lead:leading-4 prose-h1:text-heading-1 prose-h2:text-heading-2 prose-h2:font-light prose-h3:text-heading-3 prose-h4:text-heading-4 prose-p:font-roboto-slab prose-p:text-sm prose-p:font-normal prose-p:text-secondary-500 prose-blockquote:rounded prose-blockquote:border-orange-primary prose-blockquote:bg-tertiary-200 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:font-roboto-slab prose-blockquote:text-sm prose-blockquote:not-italic prose-code:text-primary-700 prose-pre:bg-tertiary-200 prose-ol:ml-4 prose-ol:text-sm prose-ol:font-normal prose-ol:text-secondary-500 prose-ul:ml-3 prose-ul:font-normal prose-ul:text-secondary-500 prose-table:rounded prose-table:bg-tertiary-200 prose-td:text-secondary-500 prose-img:inline-block dark:prose-headings:text-white dark:prose-a:text-white dark:prose-blockquote:bg-primary-800 dark:prose-strong:text-secondary-300  dark:prose-code:text-white dark:prose-pre:bg-primary-800 dark:prose-ol:text-secondary-400 dark:prose-ul:text-secondary-400 dark:prose-table:bg-primary-800 dark:prose-td:text-secondary-400 md:p-6 md:pb-60 ">
          {children}
        </div>
      </ScrollSyncPane>
      </div>
  );
}
