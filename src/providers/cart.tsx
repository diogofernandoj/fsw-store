"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscounts: number;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  cartBasePrice: 0,
  cartTotalPrice: 0,
  cartTotalDiscounts: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const subtotal = useMemo(() => {
    return cartProducts.reduce((acc, products) => {
      return acc + Number(products.basePrice) * products.quantity;
    }, 0);
  }, [cartProducts]);

  const total = useMemo(() => {
    return cartProducts.reduce((acc, products) => {
      return acc + products.totalPrice * products.quantity;
    }, 0);
  }, [cartProducts]);

  const totalDiscounts = subtotal - total;

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

  const removeProductFromCart = (productId: string) => {
    const newProducts = cartProducts.filter(
      (cartProduct) => cartProduct.id !== productId,
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
        removeProductFromCart,
        cartBasePrice: subtotal,
        cartTotalPrice: total,
        cartTotalDiscounts: totalDiscounts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
