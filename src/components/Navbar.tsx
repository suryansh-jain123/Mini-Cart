import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Sun, Moon, LogIn, LogOut } from "lucide-react";
import { useStore } from "../store/useStore";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Navbar: React.FC = () => {
  const {
    user,
    setUser,
    searchQuery,
    setSearchQuery,
    cart,
    isDarkMode,
    toggleDarkMode,
  } = useStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLogin = () => {
    // Dummy user for Simulation
    setUser({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <ShoppingCart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
            minicart
            </span>
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs 
                               rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* {user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg
                           bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg
                         bg-indigo-600 text-white hover:bg-indigo-700"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )} */}
           
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};