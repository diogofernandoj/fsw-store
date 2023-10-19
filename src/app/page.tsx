"use client";

import { useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();
  return (
    <div>
      <h1>{data?.user?.name}</h1>
    </div>
  );
};

export default Home;
