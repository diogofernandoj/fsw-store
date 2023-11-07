"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imagesUrl: string[];
  name: string;
}

const ProductImages = ({ imagesUrl, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState<string>(imagesUrl[0]);

  return (
    <div className="-mt-8 flex h-full flex-col gap-8 lg:mt-0">
      <div className="flex h-[300px] w-full items-center justify-center bg-accent lg:h-full">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="grid grid-cols-4 gap-4 px-5 lg:px-0">
        {imagesUrl.map((image) => (
          <button
            key={image}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              currentImage === image && "border-2 border-solid border-primary"
            }`}
            onClick={() => setCurrentImage(image)}
          >
            <Image
              src={image}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
