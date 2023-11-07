import Image from "next/image";
import { ProductWithTotalPrice, currencyNumber } from "@/helpers/product";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex w-full min-w-[160px] flex-col gap-2 overflow-hidden lg:w-[200px]">
        <div className="relative flex h-40 w-full items-center justify-center rounded-lg bg-accent lg:h-[200px] lg:w-[200px]">
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-2 top-2">
              {product.discountPercentage}
            </DiscountBadge>
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
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm lg:text-base">
            {product.name}
          </p>
          <div className="flex items-center gap-1">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-sm font-semibold lg:text-base">
                  {currencyNumber(product.totalPrice)}
                </p>
                <p className="text-xs line-through opacity-75 lg:text-sm">
                  {currencyNumber(product.basePrice.toNumber())}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold lg:text-base">
                {currencyNumber(product.basePrice.toNumber())}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
