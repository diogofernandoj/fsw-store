"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchProducts = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");

  const handleSearchKeyUp = (key: any) => {
    if (key === "Enter" && search.trim() !== "") {
      router.push(
        `/products/search?product=${search.trim().toLocaleLowerCase()}`,
      );
    }
  };

  const handleSearchClick = () => {
    if (search.trim() !== "") {
      router.push(
        `/products/search?product=${search.trim().toLocaleLowerCase()}`,
      );
    }
  };

  return (
    <div className="relative mx-auto max-w-[600px]">
      <Input
        className="bg-accent pr-8 text-sm font-semibold"
        placeholder="Qual produto você deseja?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => handleSearchKeyUp(e.key)}
      />
      <Button
        variant="secondary"
        className="absolute right-0 top-0"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchProducts;
