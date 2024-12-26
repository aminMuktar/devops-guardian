"use server";
import { prisma } from "@/lib/prisma";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Blog = {
  id: string;
  title: string;
  subTitle: string;
  content: string;
  category?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const blog: Blog | null = await prisma.post.findUnique({
    where: { id },
  });
    

  if (!blog) {
    return (
      <div className="max-w-screen-md mx-auto py-10">
        <h1 className="text-2xl font-bold">Blog Not Found</h1>
        <p>{"We couldn’t find the blog you’re looking for."}</p>
      </div>
    );
  }
  const categories = blog.category?.split(",").map((cat) => cat.trim()) || [];
  return (
      <>
      {/* Meta tags for SEO */}
      <head>
        <title>{`${blog.title} | DevOps Guardian Blog`}</title>
        <meta name="description" content={blog.subTitle} />
        <meta name="keywords" content={categories.join(", ")} />
        <meta name="author" content="DevOps Guardian" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.subTitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://devops-guardian.dev/blog/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.subTitle} />
      </head>
      
        <div className="max-w-screen-md mx-auto py-36">
            <div className="mb-12">
              <div className="flex justify-between gap-5">
                <h1 className="text-4xl font-extrabold mb-5">{blog.title}</h1>
                <p className="text-sm text-gray-500">
                    Published on {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-xl font-semibold text-gray-300 ">{blog.subTitle}</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
                
            </div>
            <div className="font-[sans-serif]">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');

                    return !inline && match ? (
                      <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                  {blog.content}
                </ReactMarkdown>
            </div>
                
    </div>
    </>
  );
}
