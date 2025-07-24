import React, { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      excerpt: "Learn how to leverage TypeScript in React applications for better code quality, enhanced developer experience, and fewer runtime errors.",
      content: "TypeScript has become an essential tool for modern React development...",
      author: "Your Name",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "TypeScript", "JavaScript"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      title: "The Future of Web Development: WebAssembly and Beyond",
      excerpt: "Exploring how WebAssembly is revolutionizing web performance and opening new possibilities for web applications.",
      content: "WebAssembly (WASM) represents a significant leap forward in web technology...",
      author: "Your Name",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "WebDev",
      tags: ["WebAssembly", "Performance", "Future Tech"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, and when to use each layout method.",
      content: "CSS Grid and Flexbox are both powerful layout systems...",
      author: "Your Name",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      likes: 67,
      comments: 8
    },
    {
      id: 4,
      title: "API Design Best Practices for Modern Applications",
      excerpt: "Essential principles and patterns for designing robust, scalable, and developer-friendly APIs that stand the test of time.",
      content: "Good API design is crucial for successful applications...",
      author: "Your Name",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Backend",
      tags: ["API", "REST", "GraphQL", "Design"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      likes: 103,
      comments: 15
    },
    {
      id: 5,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Practical strategies to improve your React application's performance, from component optimization to bundle size reduction.",
      content: "React performance optimization is crucial for user experience...",
      author: "Your Name",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "React",
      tags: ["React", "Performance", "Optimization"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      likes: 156,
      comments: 23
    },
    {
      id: 6,
      title: "The Evolution of JavaScript: ES2024 Features",
      excerpt: "Discover the latest JavaScript features and how they can improve your development workflow and code quality.",
      content: "JavaScript continues to evolve with exciting new features...",
      author: "Your Name",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2024", "Features"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false,
      likes: 78,
      comments: 11
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "React", name: "React", count: blogPosts.filter(p => p.category === "React").length },
    { id: "JavaScript", name: "JavaScript", count: blogPosts.filter(p => p.category === "JavaScript").length },
    { id: "CSS", name: "CSS", count: blogPosts.filter(p => p.category === "CSS").length },
    { id: "WebDev", name: "Web Dev", count: blogPosts.filter(p => p.category === "WebDev").length }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 dark-transition">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog & Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights about web development, technology trends, and best practices
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-yellow-500">⭐</span>
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <motion.article
                key={post.id}
                className="group glass rounded-2xl overflow-hidden card-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>📅 {new Date(post.date).toLocaleDateString()}</span>
                    <span>⏱️ {post.readTime}</span>
                    <span>👤 {post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        ❤️ {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        💬 {post.comments}
                      </span>
                    </div>
                    
                    <motion.button
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'glass hover:bg-white/20 text-gray-700 dark:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="group glass rounded-2xl overflow-hidden card-hover"
              variants={itemVariants}
              layout
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
                {post.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-yellow-400 text-lg">⭐</span>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      ❤️ {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      💬 {post.comments}
                    </span>
                  </div>
                  
                  <motion.button
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs"
                    whileHover={{ x: 3 }}
                  >
                    Read →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="mt-20 glass rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest articles, tutorials, and insights about web development, 
            technology trends, and best practices delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button
              className="btn-primary px-6 py-3 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe 📧
            </motion.button>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            No spam, unsubscribe at any time. 100% privacy guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;