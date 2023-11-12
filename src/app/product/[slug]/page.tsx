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
    <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:px-10">
        <div className="lg:w-3/5">
          <ProductImages
            key={product.id}
            imagesUrl={product.imagesUrl}
            name={product.name}
          />
        </div>

        <div className="lg:w-2/5 lg:rounded-lg lg:bg-accent lg:p-5">
          <ProductInfo product={calcProductTotalPrice(product)} />
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:px-5">
        <SectionTitle>Produtos recomendados</SectionTitle>

        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
