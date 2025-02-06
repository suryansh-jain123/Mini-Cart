import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Add some products to your cart to see them here
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Shopping Cart
      </h2>
      
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg
                     shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">${item.price}</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900
                       rounded-lg transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg text-gray-600 dark:text-gray-300">Total</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${total.toFixed(2)}
          </span>
        </div>
        
        <button
          className="w-full py-3 bg-indigo-600 text-white rounded-lg
                   hover:bg-indigo-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};