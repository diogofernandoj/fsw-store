import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { calcProductTotalPrice } from "@/helpers/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages
        key={product.id}
        imagesUrl={product.imagesUrl}
        name={product.name}
      />

      <ProductInfo product={calcProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
