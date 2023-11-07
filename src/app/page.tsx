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
    <div className="flex flex-col gap-8 lg:gap-10">
      <Image
        src="/banner-offers.png"
        alt="Até 55% de desconto esse mês!"
        className="hidden h-auto w-full lg:block"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="flex flex-col gap-8 p-0 lg:container lg:gap-10">
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

        <div className="flex flex-col lg:flex-row">
          <PromoBanner
            src="/banner-mouses.png"
            alt="Até 55% de desconto em mouses!"
            className="lg:w-1/2"
          />
          <PromoBanner
            src="/banner-fones.png"
            alt="Até 55% de desconto em fones!"
            className="hidden lg:block lg:w-1/2"
          />
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <PromoBanner
          src="/banner-fones.png"
          alt="Até 55% de desconto em fones!"
          className="lg:hidden"
        />
        <PromoBanner
          src="/banner-free-shipping.png"
          alt="Frete grátis para todo o Brasil!"
          className="hidden lg:block"
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
