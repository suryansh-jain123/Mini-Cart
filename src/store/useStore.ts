import { create } from 'zustand';
import { Product, User, CartItem } from '../types';

interface Store {
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Products
  products: Product[];
  setProducts: (products: Product[]) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
  
  // Categories
  categories: string[];
  setCategories: (categories: string[]) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  
  // Dark Mode
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>((set) => ({
  // Auth
  user: null,
  setUser: (user) => set({ user }),
  
  // Products
  products: [],
  setProducts: (products) => set({ products }),
  filteredProducts: [],
  setFilteredProducts: (products) => set({ filteredProducts: products }),
  
  // Categories
  categories: [],
  setCategories: (categories) => set({ categories }),
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  // Search
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // Cart
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),
  
  // Dark Mode
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));