// "use client"

// import React, { createContext, useContext, useEffect, useState } from 'react';

// export interface CartItem {
//   id: string;
//   name: string;
//   imagePath: string;
//   price: number;
//   quantity: number


// }

// interface CartContextType {
//   cart: CartItem[];
//   favourite: CartItem[]
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   addToFavourite: (product: CartItem) => void;
//   clearCart: () => void;
//   totalPrice: number


// }


// export const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // const [cart, setCart] = useState<CartItem[]>([]);
//   const [favourite, setFavourite] = useState<CartItem[]>([])
//   const [totalPrice, setTotalPrice] = useState<number>(0);
//   const [cart, setCart] = useState<CartItem[]>(() => {
//     // Retrieve the cart from localStorage when the component mounts
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });











//   const addToFavourite = (product: CartItem) => {
//     const existingProduct = favourite.find((item) => item.id === product.id);
//     if (!existingProduct) {
//       setFavourite([...favourite, product]);
//     }
//   };
  




 
//   //   const existingProduct = cart.find((item) => item.id === product.id);
//   //   if (existingProduct) {
//   //     setCart(
//   //       cart.map((item) =>
//   //         item.id === product.id
//   //           ? { ...item, quantity: item.quantity + 1 }
//   //           : item
//   //       )
//   //     );
//   //   } else {
//   //     setCart([...cart, { ...product, quantity: 1 }]);
//   //   }
//   // };







  
//   const addToCart = (product: CartItem) => {
//     const existingProduct = cart.find((item) => item.id === product.id);
  
//     let updatedCart;
//     if (existingProduct) {
//       updatedCart = cart.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     } else {
//       updatedCart = [...cart, { ...product, quantity: 1 }];
//     }
  
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//   };
  
//   // Clear cart when needed
//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("cart");
//   };
  
//   useEffect(() => {
//     // Load cart from localStorage when the component mounts
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);
  

























//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Calculate the total price of all items in the cart
//   useEffect(() => {
//     const newTotalPrice = cart.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//     setTotalPrice(newTotalPrice);
//   }, [cart]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, addToFavourite, totalPrice, favourite, clearCart}}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);

//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

























"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
}
interface Product {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  favourite: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToFavourite: (product: CartItem) => void;
  clearCart: () => void;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favourite, setFavourite] = useState<CartItem[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
  
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // ✅ Check if window is defined to avoid SSR errors
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const addToFavourite = (product: CartItem) => {
    const existingProduct = favourite.find((item) => item.id === product.id);
    if (!existingProduct) {
      setFavourite([...favourite, product]);
    }
  };

  const addToCart = (product: CartItem) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Only use localStorage in the browser
    }
  };

  const clearCart = () => {
    setCart([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, products, setProducts, addToCart, removeFromCart, addToFavourite, totalPrice, favourite, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

