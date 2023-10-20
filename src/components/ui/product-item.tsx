import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPrice, currencyNumber } from "@/helpers/product";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex w-36 flex-col gap-4">
      <div className="relative flex h-36 w-36 items-center justify-center rounded-lg bg-accent">
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
          className="h-auto w-4/5 object-contain"
        />
      </div>

      <div className="flex flex-col">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-1">
          {product.discountPercentage > 0 && (
            <>
              <p className=" font-semibold">
                {currencyNumber(product.totalPrice)}
              </p>
              <p className="text-xs line-through opacity-75">
                {currencyNumber(product.basePrice.toNumber())}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
