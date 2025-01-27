"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number


}

interface CartContextType {
  cart: CartItem[];
  favourite: CartItem[]
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToFavourite: (product: CartItem) => void;
  totalPrice: number


}


export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourite, setFavourite] = useState<CartItem[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0);
  console.log(cart)
  console.log(favourite)











  const addToFavourite = (product: CartItem) => {
    const existingProduct = favourite.find((item) => item.id === product.id);
    if (!existingProduct) {
      setFavourite([...favourite, product]);
    }
  };
  




  const addToCart = (product: CartItem) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };



  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate the total price of all items in the cart
  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, addToFavourite, totalPrice, favourite }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
