import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductItem from "@/components/ui/product-item";
import { calcProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SearchList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const product = searchParams.product as string;

  const products = await prismaClient.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: product,
          },
        },
        {
          description: {
            contains: product,
          },
        },
        {
          slug: {
            contains: product,
          },
        },
      ],
    },
  });

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 md:px-12 lg:px-20">
      {products.length ? (
        <>
          <Badge variant="heading">
            <SearchIcon />
            {`Resultado para: ${product}`}
          </Badge>
          <div className="flex w-full flex-wrap justify-center gap-5 lg:justify-start lg:gap-10">
            {products.map((product) => (
              <div className="w-[160px] lg:w-[200px]" key={product.id}>
                <ProductItem product={calcProductTotalPrice(product)} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="text-center text-xl font-semibold">
            Ops! Não conseguimos encontrar nada relacionado a:{" "}
            <span className="font-bold text-primary">{product}</span>
          </h2>
          <Image
            src="/no-result.svg"
            alt="Nada encontrado"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-[300px]"
          />
          <Link href="/">
            <Button className="w-full font-bold uppercase">
              Voltar ao início
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchList;
