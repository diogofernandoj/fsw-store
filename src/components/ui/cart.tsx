"use client";

import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";

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

      <div className="flex flex-col gap-4">
        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
