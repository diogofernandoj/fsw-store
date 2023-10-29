"use client";

import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import Image from "next/image";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div>
      <Badge
        variant="outline"
        className="mb-8 flex w-fit items-center gap-1 border-2 border-primary px-3 py-1 text-base uppercase"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {!cartProducts.length ? (
        <div className="flex h-full w-full flex-col gap-6">
          <p className="text-center text-xl font-bold">
            Você não adicionou itens ao carrinho!
          </p>
          <Image
            src="/empty-cart.svg"
            alt="Empty cart"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto h-[65%] w-auto max-w-[85%]"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
