import Image from "next/image";
import React from "react";

interface ProductType {
  image: string;
  alt: string;
  title: string;
  desc: string;
  sticker: string;
}

const Product = ({ product }: { product: ProductType }) => {
  const imageSize =
    product.sticker === "Capsule"
      ? 130
      : product.sticker === "Cream"
        ? 150
        : product.sticker === "Lip Lotion"
          ? 200
          : 280;

  return (
    <div className="relative mx-auto flex flex-col items-center">
      <div className="relative mx-auto flex h-[220px] w-[95%] items-center justify-center gap-x-3 rounded-2xl bg-[#E9EDF5] sm:h-[254px] sm:w-[95%] md:w-[95%] lg:w-full xl:w-[235px]">
        <div className="absolute right-4 top-4 rounded bg-[#D3DDEA] p-1 text-xs font-medium">
          {product.sticker}
        </div>
        <div className="flex size-full items-center justify-center p-2">
          <Image
            src={product.image}
            alt={product.alt}
            width={imageSize}
            height={imageSize}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col items-center justify-center gap-1 text-center">
        <h2 className="text-sm font-medium sm:text-xs">{product.title}</h2>
        <p className="text-xs font-medium sm:text-[10px]">{product.desc}</p>
      </div>
    </div>
  );
};

export default Product;
