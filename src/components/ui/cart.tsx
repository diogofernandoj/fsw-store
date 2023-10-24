"use client";

import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";

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

      <div className="flex flex-col">
        {cartProducts.map((product) => (
          <h2 key={product.id}>{product.name}</h2>
        ))}
      </div>
    </div>
  );
};

export default Cart;
