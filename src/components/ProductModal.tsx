import React from 'react';
import { X, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useStore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100
                   dark:hover:bg-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full
                           text-sm text-gray-600 dark:text-gray-300">
                {product.category}
              </span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg
                         hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};