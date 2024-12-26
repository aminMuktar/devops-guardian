import type { FC } from "react";

interface Props {
  id: string;
  title: string;
  subTitle: string;
  category?: string; 
}

export const BlogPostCard: FC<Props> = (props) => {
  const categories = props.category?.split(",").map((cat) => cat.trim()) || [];
  return (
    <div className="shadow-md border border-gray-800 rounded-lg max-w-sm mb-5">
      <div className="p-5">
        <a href={`/blog/${props.id}`}>
          <h5 className="text-2xl mb-2 break-words">{props.title}</h5>
        </a>
        <p className="text-sm text-gray-500 mb-3 break-words">{props.subTitle}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {cat}
            </span>
          ))}
        </div>
        <a
          href={`/blog/${props.id}`}
          className="text-background bg-yellow-500 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
