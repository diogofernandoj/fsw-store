"use client";

import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import Image from "next/image";
import { Separator } from "./separator";
import { currencyNumber } from "@/helpers/product";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const { cartProducts, cartBasePrice, cartTotalPrice, cartTotalDiscounts } =
    useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    const checkout = await createCheckout(cartProducts);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({ sessionId: checkout.id });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge variant="heading">
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
        <div className="flex flex-1 flex-col gap-6">
          <ScrollArea className=" h-max max-h-[calc(100vh-340px)] overflow-hidden">
            <div className="flex flex-col gap-4">
              {cartProducts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </ScrollArea>
          <div className="flex h-[160px] flex-col gap-3 text-xs lg:text-sm">
            <Separator />
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>{currencyNumber(cartBasePrice)}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p>Entrega</p>
              <p>GRÁTIS</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p>Descontos</p>
              <p>-{currencyNumber(cartTotalDiscounts)}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm font-bold lg:text-base">
              <p>Total</p>
              <p>{currencyNumber(cartTotalPrice)}</p>
            </div>
            <Button
              className="font-bold uppercase"
              onClick={handleFinishPurchaseClick}
            >
              Finalizar compra
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
