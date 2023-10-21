import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
import Link from "next/link";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge variant="outline" className="w-full rounded-lg py-3">
        <div className="flex w-full items-center justify-center gap-1">
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className="text-xs font-bold">{category.name}</span>
        </div>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
