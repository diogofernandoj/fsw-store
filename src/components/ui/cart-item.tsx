import Image from "next/image";
import { CartContext, CartProduct } from "@/providers/cart";
import { currencyNumber } from "@/helpers/product";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "./button";
import { useContext } from "react";

const CartItem = ({ product }: { product: CartProduct }) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-accent lg:h-32 lg:w-32">
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
          <p className="text-xs lg:text-base">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold lg:text-lg">
              {currencyNumber(product.totalPrice)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75 lg:text-sm">
                {currencyNumber(Number(product.basePrice))}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Button
              variant="outline"
              size="icon"
              className="h-5 w-5 lg:h-8 lg:w-8"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <MinusIcon className="h-3 w-3 lg:h-5 lg:w-5" />
            </Button>
            <span className="text-xs font-semibold lg:text-base">
              {product.quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-5 w-5 lg:h-8 lg:w-8"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <PlusIcon className="h-3 w-3 lg:h-5 lg:w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10"
        onClick={() => removeProductFromCart(product.id)}
      >
        <TrashIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      </Button>
    </div>
  );
};

export default CartItem;
