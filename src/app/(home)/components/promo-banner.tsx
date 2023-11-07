import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const PromoBanner = ({ className, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      alt={props.alt}
      height={0}
      width={0}
      sizes="100vw"
      className={cn(className, "h-auto w-full px-5")}
    />
  );
};

export default PromoBanner;
