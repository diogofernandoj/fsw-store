import ProductItem from "@/components/ui/product-item";
import { calcProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { Suspense } from "react";
import ProductListSkeleton from "../product-list-skeleton";

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={calcProductTotalPrice(product)}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default ProductList;
