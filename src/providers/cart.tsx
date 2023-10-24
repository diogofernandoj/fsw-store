"use client";

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

export interface CartProduct extends Product {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscounts: number;
}

const CartContext = createContext<ICartContext>({
  cartProducts: [],
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscounts: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        cartProducts: [],
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
