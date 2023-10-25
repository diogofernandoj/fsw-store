import Image from "next/image";
import { CartProduct } from "@/providers/cart";
import { currencyNumber } from "@/helpers/product";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "./button";

const CartItem = ({ product }: { product: CartProduct }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imagesUrl[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {currencyNumber(product.totalPrice)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {currencyNumber(Number(product.basePrice))}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MinusIcon size={16} />
            </Button>
            <span>{product.quantity}</span>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <PlusIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button variant="outline" size={"icon"}>
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartItem;
