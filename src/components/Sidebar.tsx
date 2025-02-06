import React from 'react';
import { useStore } from '../store/useStore';

export const Sidebar: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = useStore();

  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Categories
        </h2>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors
                     ${
                       selectedCategory === null
                         ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                         : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors
                       ${
                         selectedCategory === category
                           ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                           : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                       }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};