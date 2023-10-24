"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice, currencyNumber } from "@/helpers/product";
import { MinusIcon, PlusIcon, TruckIcon } from "lucide-react";
import { useState } from "react";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { addProductToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-xl">{product.name}</h2>

      <div className="flex flex-col">
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold">
            {currencyNumber(product.totalPrice)}
          </span>
          {product.discountPercentage > 0 && (
            <DiscountBadge>{product.discountPercentage}</DiscountBadge>
          )}
        </div>
        {product.discountPercentage > 0 && (
          <div className="flex items-center gap-1 text-sm opacity-75">
            <span>De:</span>
            <p className="line-through ">
              {currencyNumber(Number(product.basePrice))}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button variant="outline">
          <MinusIcon size={14} />
        </Button>
        <span>{quantity}</span>
        <Button variant="outline">
          <PlusIcon size={14} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-sm font-bold">Descrição</h2>

        <p className="text-xs opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={() => addProductToCart({ ...product, quantity })}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-8 flex items-center justify-between rounded-lg bg-accent px-5 py-2 text-xs">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-[#8162ff]">
              Entrega via <span className="font-bold">JotaPacket®</span>
            </p>
            <p>
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
