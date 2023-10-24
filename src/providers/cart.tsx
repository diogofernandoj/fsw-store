"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscounts: number;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addProductToCart: () => {},
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscounts: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    setCartProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        cartBasePrice: 0,
        cartTotalPrice: 0,
        cartTotalDiscounts: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
