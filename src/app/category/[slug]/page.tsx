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
    <div className="flex flex-col gap-8 px-4">
      <Badge variant="heading">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>
      <div className="grid grid-cols-2 gap-5">
        {category.products.map((product) => (
          <div className="w-full" key={product.id}>
            <ProductItem product={calcProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
