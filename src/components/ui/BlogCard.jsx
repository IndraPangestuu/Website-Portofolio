import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
/* The file './types/Blg.js' only contains JSDoc typedefs and does not export anything.
   Therefore, the import of BlogPost is invalid and should be removed. */

const BlogCard = ({ post, variant = 'default' }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
              Featured
            </span>
          </div>
        </div>

        <div className="relative p-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform duration-300">
              Read More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
            {post.category}
          </span>
          
          <button className="flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
            Read More
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;