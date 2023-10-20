import Image from "next/image";
import Categories from "./(home)/components/categories";
import ProductList from "./(home)/components/product-list";
import { prismaClient } from "@/lib/prisma";

const Home = async () => {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home01.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="mb-2 ml-5 font-bold uppercase">Ofertas</p>
        <ProductList products={offers} />
      </div>

      <Image
        src="/banner-mouses.png"
        alt="Até 55% de desconto em mouses!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />
    </div>
  );
};

export default Home;
