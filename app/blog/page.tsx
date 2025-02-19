"use client"
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { useState,useEffect } from "react";
import Head from "next/head";

type Blog = {
    id: string;
    title: string;
    subTitle: string;
    content?: string;
    published: boolean;
    category?:string;
    createdAt: string; // Use Date if you parse it later
    updatedAt: string; // Use Date if you parse it later
  };
  
export default function Blog(){
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(9); 
    const [totalPages, setTotalPages] = useState(0);
    const fetchPublishedBlogs = async () => {
      try{
        const res = await fetch(`/api/posts?page=${page}&pageSize=${pageSize}`);
        if(!res.ok){
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();

        setBlogs(data.posts || []);
        setTotalPages(data.pagination?.totalPages || 1);
      }
      catch(error){
        console.error("Error fetching blogs:", error);
      }
        
      };
      
      useEffect(() => {
        fetchPublishedBlogs();
      }, [page]);

    return (
        <>
        <Head>
        <title>Our Blog | DevOps Guardian</title>
        <meta
          name="description"
          content="Welcome to the DevOps Guardian blog! Discover the latest resources, tips, and strategies to level up your tech skills and stay ahead in the world of DevOps."
        />
        <meta name="keywords" content="DevOps blog, tech resources, skill strategy, DevOps tutorials" />
        <link rel="canonical" href={`https://devops-guardian.dev/blog?page=${page}`} />
      </Head>
        <div className="mx-auto flex items-center justify-between p-6">
            <div className="pt-36 w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                <p className="font-light text-gray-300 ">Welcome to the Devops Guardian blog! Discover all the latest resources to take your Tech skill strategy to the next level.</p>
            </div> 
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogPostCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  category={blog.category}
                  subTitle={blog.subTitle}
                />
              ))
            ) : (
              <p className="text-gray-500">No blogs found.</p>
            )}
            </div>
            </div>
        </div>


        

  
      <div className="pagination flex gap-5 justify-center">
        <div className="inline-flex mt-2 xs:mt-0">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Prev
            </button>
            <button 
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
      </div>
        </>
              
    );
}