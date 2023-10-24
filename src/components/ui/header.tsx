"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  HomeIcon,
  PercentIcon,
  ListOrderedIcon,
  LogOutIcon,
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
import { Sree_Krushnadevaraya } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-5">
      <Sheet>
        <SheetTrigger asChild>
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
              <div className=" flex items-center gap-2 py-4">
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

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} /> Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} /> Ofertas
            </Button>

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
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Jota</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
