"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
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
    const productAlreadyOnCart = cartProducts.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productAlreadyOnCart) {
      const newProducts = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          : cartProduct,
      );

      setCartProducts(newProducts);
    } else {
      setCartProducts((prev) => [...prev, product]);
    }
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
