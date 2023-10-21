import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Badge variant="outline" className="rounded-lg py-3">
      <div className="m-auto flex w-4/5 items-center gap-2">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </div>
    </Badge>
  );
};

export default CategoryItem;
