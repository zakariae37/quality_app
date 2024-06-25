import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { logos } from "@/constant";

const Services = () => {
  return (
    <div className="md:my-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-gelasio text-3xl">White label services</h1>
        <p className="max-w-[837px]">
          Our expert team can help you develop your own line of Beverly Hills
          Cosmetics or any other product that you can <br /> imagine. Contact us
          today to schedule a consult with of our branding experts to help make
          your vision a reality.
        </p>
        <Button className="flex items-center gap-2 rounded-full bg-[#194894] text-white hover:bg-[#194894] hover:text-white">
          <p>Contact Us</p>
          <Image
            src="/assets/images/arrow.png"
            alt="arrow"
            width={14}
            height={14}
          />
        </Button>
      </div>
      <div className="mt-10 w-full">
        <Image
          src="/assets/images/product.png"
          alt="product"
          width={1440}
          height={640}
        />
      </div>
      <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-14 lg:gap-1">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/4 md:w-1/5 lg:w-[15%] xl:w-[12%] 2xl:w-[10%]"
          >
            <Image src={logo.src} alt={logo.alt} width={70} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
