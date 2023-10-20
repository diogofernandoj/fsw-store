import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { LayoutDashboardIcon } from "lucide-react";
import CatalogItem from "./components/catalog-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="px-5">
      <Badge
        variant="outline"
        className="mb-8 flex w-fit items-center gap-1 border-2 border-primary px-3 py-1 text-base uppercase"
      >
        <LayoutDashboardIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
