import React from 'react';
import { Search } from 'lucide-react';
// import { BlogCategory } from './types/Blg';

import PropTypes from 'prop-types';

const BlogFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
      {/* Search Bar */}
      <div className="relative w-full lg:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
            }`}
          >
            {category.name}
            <span className="ml-1 text-xs opacity-75">({category.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

BlogFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default BlogFilter;