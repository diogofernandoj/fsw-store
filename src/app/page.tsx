import Categories from "./(home)/components/categories";
import ProductList from "../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "../components/ui/section-title";
import PromoBanner from "./(home)/components/promo-banner";
import Link from "next/link";
import DesktopBanner from "./(home)/components/desktop-banner";
import CategoriesSkeleton from "./(home)/components/categories-skeleton";
import { Suspense } from "react";

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
      <Link href="/offers" className="-mt-8 hidden lg:block">
        <DesktopBanner />
      </Link>

      <div className="flex flex-col gap-8 p-0 lg:container lg:gap-10">
        <Link href="/offers" className="lg:hidden">
          <PromoBanner
            src="/banner-home01.png"
            alt="Até 55% de desconto esse mês!"
          />
        </Link>

        <div className="px-5">
          <Suspense fallback={<CategoriesSkeleton />}>
            <Categories />
          </Suspense>
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={offers} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/category/mouses" className="lg:w-1/2">
            <PromoBanner
              src="/banner-mouses.png"
              alt="Até 55% de desconto em mouses!"
            />
          </Link>
          <Link href="/category/headphones" className="hidden w-1/2 lg:block">
            <PromoBanner
              src="/banner-fones.png"
              alt="Até 55% de desconto em fones!"
            />
          </Link>
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <Link href="/category/headphones" className="lg:hidden">
          <PromoBanner
            src="/banner-fones.png"
            alt="Até 55% de desconto em fones!"
          />
        </Link>
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
