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
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 md:px-12 lg:px-20">
      <Badge variant="heading">
        <PercentIcon />
        Ofertas
      </Badge>
      <div className="flex w-full flex-wrap justify-center gap-5 lg:justify-start lg:gap-10">
        {offers.map((product) => (
          <div className="w-[160px] lg:w-[200px]" key={product.id}>
            <ProductItem product={calcProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
