import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { calcProductTotalPrice } from "@/helpers/product";
import SectionTitle from "@/components/ui/section-title";
import ProductList from "@/components/ui/product-list";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
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

      <div className="flex flex-col gap-2">
        <SectionTitle>Produtos recomendados</SectionTitle>

        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
