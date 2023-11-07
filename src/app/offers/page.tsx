import ProductItem from "@/components/ui/product-item";
import { calcProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const OffersPage = async () => {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="grid grid-cols-2 gap-8 px-5">
      {offers.map((product) => (
        <ProductItem
          key={product.id}
          product={calcProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default OffersPage;
