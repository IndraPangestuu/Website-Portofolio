import React from "react";

const posts = [
  {
    id: 1,
    title: "My First Blog Post",
    summary: "An introduction to my blog and what you can expect.",
    date: "2024-01-01",
    url: "#",
  },
  {
    id: 2,
    title: "Learning React",
    summary: "Sharing my journey learning React and tips for beginners.",
    date: "2024-02-15",
    url: "#",
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <section id="blog" className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Blog</h2>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <a href={post.url} className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </a>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{post.summary}</p>
            <time className="text-sm text-gray-500 dark:text-gray-400 mt-1 block">{post.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
