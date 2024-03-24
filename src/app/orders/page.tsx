import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearch } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrderItem from "./components/order-item";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OrdersPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 lg:px-20">
      <Badge variant="heading">
        <PackageSearch /> Meus pedidos
      </Badge>
      {orders.length ? (
        <div className="flex flex-col gap-5">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center gap-6">
          <h2 className="text-center text-xl font-bold text-gray-50 lg:text-3xl">
            Você ainda não tem pedidos! :c
          </h2>
          <Link href="/">
            <Button className="font-bold">Ir para o catálogo</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
