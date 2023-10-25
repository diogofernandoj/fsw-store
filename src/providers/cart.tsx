"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscounts: number;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
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

  const decreaseProductQuantity = (productId: string) => {
    const newProducts = cartProducts.map((cartProduct) =>
      cartProduct.id === productId && cartProduct.quantity > 1
        ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
        : cartProduct,
    );

    setCartProducts(newProducts);
  };

  const increaseProductQuantity = (productId: string) => {
    const newProducts = cartProducts.map((cartProduct) =>
      cartProduct.id === productId
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct,
    );

    setCartProducts(newProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
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
