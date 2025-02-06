export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface CartItem extends Product {
  quantity: number;
}