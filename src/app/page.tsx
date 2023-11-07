import Image from "next/image";
import Categories from "./(home)/components/categories";
import ProductList from "../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "../components/ui/section-title";
import PromoBanner from "./(home)/components/promo-banner";

const Home = async () => {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <Image
        src="/banner-offers.png"
        alt="Até 55% de desconto esse mês!"
        className="hidden h-auto w-full lg:block"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="flex flex-col gap-8 p-0 lg:container">
        <PromoBanner
          src="/banner-home01.png"
          alt="Até 55% de desconto esse mês!"
          className="lg:hidden"
        />

        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={offers} />
        </div>

        <PromoBanner
          src="/banner-mouses.png"
          alt="Até 55% de desconto em mouses!"
        />

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <PromoBanner
          src="/banner-fones.png"
          alt="Até 55% de desconto em fones!"
        />

        <div>
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </div>
  );
};

export default Home;
