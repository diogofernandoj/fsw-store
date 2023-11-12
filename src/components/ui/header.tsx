"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  HomeIcon,
  PercentIcon,
  ListOrderedIcon,
  LogOutIcon,
  PackageSearch,
  SearchIcon,
  User2Icon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { Badge } from "./badge";
import { useContext, useState } from "react";
import { CartContext } from "@/providers/cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import SearchProducts from "@/app/(home)/components/search-products";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  const { cartProducts } = useContext(CartContext);

  const [inputSearch, setInputSearch] = useState<boolean>(false);

  return (
    <Card className="flex items-center justify-between p-5">
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-4">
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} /> Fazer login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={16} /> Fazer logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} /> Início
                </Button>
              </Link>
            </SheetClose>

            {data?.user && (
              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearch size={16} /> Meus pedidos
                  </Button>
                </Link>
              </SheetClose>
            )}

            <SheetClose asChild>
              <Link href="/offers">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} /> Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} /> Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold lg:text-xl">
          <span className="font-bold text-primary">Jota</span>Store
        </h1>
      </Link>

      <div className="hidden items-center gap-2 lg:flex">
        <Link href="/">
          <Button variant="ghost" className="text-sm opacity-75">
            Início
          </Button>
        </Link>
        <Link href="/catalog">
          <Button variant="ghost" className="text-sm opacity-75">
            Catálogo
          </Button>
        </Link>
        <Link href="/offers">
          <Button variant="ghost" className="text-sm opacity-75">
            Ofertas
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          {inputSearch && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "230px" }}
              exit={{ opacity: 0, width: 0 }}
              onBlur={() => setInputSearch(false)}
              className="absolute right-0 top-0 w-[230px]"
            >
              <SearchProducts setInputSearch={setInputSearch} />
            </motion.span>
          )}
          <Button
            variant="outline"
            size="icon"
            className="hidden items-center justify-center lg:flex"
            onClick={() => setInputSearch(true)}
          >
            <SearchIcon />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="hidden items-center justify-center lg:flex"
              variant="outline"
              size="icon"
            >
              <User2Icon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {data?.user && (
              <>
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 py-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>

                        {data.user.image && (
                          <AvatarImage src={data.user.image} />
                        )}
                      </Avatar>

                      <div className="flex flex-col">
                        <p className="text-sm font-medium">{data.user.name}</p>
                        <p className="text-xs opacity-75">Boas compras!</p>
                      </div>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </>
            )}
            {status === "unauthenticated" ? (
              <DropdownMenuItem
                onClick={handleLoginClick}
                className="flex items-center gap-2"
              >
                <LogInIcon size={16} /> Fazer login
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                onClick={handleLogoutClick}
                className="flex items-center gap-2"
              >
                <LogOutIcon size={16} /> Fazer logout
              </DropdownMenuItem>
            )}
            {data?.user && (
              <Link href="/orders">
                <DropdownMenuItem className="flex items-center gap-2">
                  <PackageSearch size={16} /> Meus pedidos
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              {cartProducts.length > 0 && (
                <Badge className="absolute -right-2 -top-2 flex h-5 w-6 items-center justify-center p-1 text-xs">
                  {cartProducts.length}
                </Badge>
              )}
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="min-w-[340px] lg:max-w-[550px]">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
