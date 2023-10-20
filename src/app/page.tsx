import Image from "next/image";
import Categories from "./(home)/components/categories";
import ProductList from "./(home)/components/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./(home)/components/section-title";
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
    <div>
      <PromoBanner
        src="/banner-home01.png"
        alt="Até 55% de desconto esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={offers} />
      </div>

      <PromoBanner
        src="/banner-mouses.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-fones.png"
        alt="Até 55% de desconto em fones!"
      />

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
};

export default Home;
