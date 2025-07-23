import React, { useState, useMemo } from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';
import BlogCard from './BlogCard';
import BlogFilter from './BlogFilter';
import BlogPagination from './BlogPagination';
import { blogPosts, blogCategories } from '../data/blogData';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.toLowerCase().replace(/\s+/g, '-')
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => blogPosts.find(post => post.featured), [blogPosts]);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Latest <span className="text-blue-600">Insights</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, tutorials, and insights in web development, 
            programming, and technology through my curated collection of articles.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchQuery && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Featured Article</h3>
            </div>
            <BlogCard post={featuredPost} variant="featured" />
          </div>
        )}

        {/* Filters */}
        <BlogFilter
          categories={blogCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        {/* Results Info */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {filteredPosts.length === 0 ? 'No articles found' : 
               `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`}
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== 'all' && (() => {
                const categoryObj = blogCategories.find(cat => cat.id === selectedCategory);
                return ` in ${categoryObj ? categoryObj.name : selectedCategory}`;
              })()}
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Show All Articles
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Stay Updated?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to my newsletter and never miss the latest articles, tutorials, 
            and insights about web development and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              onClick={event => event.preventDefault()}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;