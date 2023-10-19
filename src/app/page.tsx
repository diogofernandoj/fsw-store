import Image from "next/image";
import Categories from "./(home)/components/categories";

const Home = () => {
  return (
    <div className="p-5">
      <Image
        src="/banner-home01.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
