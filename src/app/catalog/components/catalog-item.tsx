import Image from "next/image";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CatalogItemProps {
  category: Category;
}

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[140px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#5033C3] to-[#5033c333]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-1/2 object-contain"
          />
        </div>
        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
          <p className="text-center font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
