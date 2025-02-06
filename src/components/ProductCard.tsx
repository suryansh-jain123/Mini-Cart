import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden
                  transform transition-transform hover:scale-105">
      <div className="relative pb-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
          onClick={onClick}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate"
            onClick={onClick}>
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {product.category}
        </p>
        <div className="flex items-center mt-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};