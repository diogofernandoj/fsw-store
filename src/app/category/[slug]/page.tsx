import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { calcProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 md:px-12 lg:px-20">
      <Badge variant="heading">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>
      <div className="flex w-full flex-wrap justify-center gap-5 lg:justify-start lg:gap-10">
        {category.products.map((product) => (
          <div className="w-[160px] lg:w-[200px]" key={product.id}>
            <ProductItem product={calcProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
