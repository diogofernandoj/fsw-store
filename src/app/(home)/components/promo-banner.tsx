"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

const PromoBanner = ({ className, ...props }: ImageProps) => {
  return (
    <motion.div
      className="div"
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Image
        {...props}
        alt={props.alt}
        height={0}
        width={0}
        sizes="100vw"
        className={cn(className, "h-auto w-full px-5")}
      />
    </motion.div>
  );
};

export default PromoBanner;
