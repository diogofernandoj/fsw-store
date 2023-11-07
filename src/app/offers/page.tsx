import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { calcProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const OffersPage = async () => {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col px-5">
      <Badge
        variant="outline"
        className="mb-8 flex w-fit items-center gap-1 border-2 border-primary px-3 py-1 text-base uppercase"
      >
        <PercentIcon />
        Ofertas
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {offers.map((product) => (
          <ProductItem
            key={product.id}
            product={calcProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
