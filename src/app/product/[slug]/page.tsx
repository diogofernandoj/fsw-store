import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";
import ProductImages from "./components/product-images";

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
    <div className="flex flex-col">
      <ProductImages
        key={product.id}
        imagesUrl={product.imagesUrl}
        name={product.name}
      />
    </div>
  );
};

export default ProductDetailsPage;
