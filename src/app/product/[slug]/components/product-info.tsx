"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice, currencyNumber } from "@/helpers/product";
import {
  CheckCircle2Icon,
  Loader2Icon,
  MinusIcon,
  PlusIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";
import { CartContext } from "@/providers/cart";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const { addProductToCart } = useContext(CartContext);
  const [addingProduct, setAddingProduct] = useState<boolean>(false);
  const [productAdded, setProductAdded] = useState<boolean>(false);

  const handleAddProductToCart = () => {
    setAddingProduct(true);
    addProductToCart({ ...product, quantity });

    setTimeout(() => {
      setProductAdded(true);
    }, 1000);

    setTimeout(() => {
      setAddingProduct(false);
      setProductAdded(false);
    }, 2000);
  };

  return (
    <motion.div
      className="flex flex-col px-5"
      variants={fadeIn("down", 0)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <h2 className="text-xl lg:text-2xl">{product.name}</h2>

      <div className="flex flex-col">
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold lg:text-3xl">
            {currencyNumber(product.totalPrice)}
          </span>
          {product.discountPercentage > 0 && (
            <DiscountBadge className="lg:text-sm">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        {product.discountPercentage > 0 && (
          <div className="flex items-center gap-1 text-sm opacity-75 lg:text-base">
            <span>De:</span>
            <p className="line-through ">
              {currencyNumber(Number(product.basePrice))}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-4">
        <Button variant="outline" onClick={handleDecreaseQuantityClick}>
          <MinusIcon size={14} />
        </Button>
        <span>{quantity}</span>
        <Button variant="outline" onClick={handleIncreaseQuantityClick}>
          <PlusIcon size={14} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h2 className="text-sm font-bold">Descrição</h2>

        <p className="text-xs opacity-60">{product.description}</p>
      </div>

      <Button
        disabled={addingProduct}
        className="mt-8 font-bold uppercase"
        onClick={handleAddProductToCart}
      >
        {addingProduct ? (
          <div>
            {productAdded ? (
              <CheckCircle2Icon />
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween" }}
              >
                <Loader2Icon className="animate-spin" />
              </motion.p>
            )}
          </div>
        ) : (
          <p>Adicionar ao carrinho</p>
        )}
      </Button>

      <div className="mt-8 flex items-center justify-between rounded-lg bg-accent px-5 py-2 text-xs lg:bg-[#2a2a2a]">
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
    </motion.div>
  );
};

export default ProductInfo;
