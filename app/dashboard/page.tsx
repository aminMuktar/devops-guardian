"use client";
import { MarkdownContainer } from "@/components/dashboard/markdown-container";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";




export default function Dashboard() {
    const [content, setContent] = useState<string>("# Hello World");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();
    const user = session?.user;

  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    subTitle: "",
    published: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formValues,
          content,
          authorEmail: user?.email, 
        }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to save post.");
      }

      setFormValues({ title: "", subTitle: "", category: "", published: false });
      setContent("# Hello World");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      toast.success("created success")
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 pt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 focus:outline-none" placeholder="Title"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="subTitle"
          name="subTitle"
          value={formValues.subTitle}
          onChange={handleInputChange}
          className="border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 focus:outline-none" placeholder="Sub title"
          required
        />
      </div>

      <div>
        <input
          type="text"
          id="category"
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
          className=" border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 focus:outline-none" placeholder="comma separated categories"
        />
      </div>
      <div className="flex items-center justify-center pt-4 mb-6">
        <div className="flex items-center h-5">
        <input 
          id="published"
          name="published"
          type="checkbox"
          checked={formValues.published}
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              published: e.target.checked,
            }))
          }
          className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-300 rounded focus:outline-none"
        />
      </div> 
      <label htmlFor="published" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Published
        </label>
      </div>
      </div>
    </div>

      <MarkdownContainer content={content} setContent={setContent} />
        

      <div className="rounded-lg shadow bg-zinc-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">   
            <button type="submit" className="text-background bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loading}>
              {loading ? "loading..." : "Save" }
            </button>
            {error && (
                <div className="bg-zinc-900 bg-opacity-50 backdrop-blur-lg text-red-500 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
            </div>
            )}
        </div>
      </div>
    </form>
  );
}
