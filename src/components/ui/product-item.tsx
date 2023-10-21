import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPrice, currencyNumber } from "@/helpers/product";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex w-full min-w-[160px] flex-col gap-2">
      <div className="relative flex h-40 w-full items-center justify-center rounded-lg bg-accent">
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}

        <Image
          src={product.imagesUrl[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="ml-2 flex flex-col">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-1">
          {product.discountPercentage > 0 ? (
            <>
              <p className="text-sm font-semibold">
                {currencyNumber(product.totalPrice)}
              </p>
              <p className="text-xs line-through opacity-75">
                {currencyNumber(product.basePrice.toNumber())}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              {currencyNumber(product.basePrice.toNumber())}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
