import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { LayoutDashboardIcon } from "lucide-react";
import CatalogItem from "./components/catalog-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 lg:px-20">
      <Badge variant="heading">
        <LayoutDashboardIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {categories.map((category) => (
          <CatalogItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
