import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Standars = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
      <div className="flex w-full flex-col gap-5 rounded-2xl bg-[#194894] px-8 py-10 text-white sm:px-16 sm:py-14 lg:w-[600px] lg:rounded-l-2xl lg:rounded-r-none">
        <h1 className="font-gelasio text-2xl sm:text-4xl">
          Setting New Standards: <br /> Elevating Compounding <br />
          Quality
        </h1>
        <div>
          <div>
            <h2 className="mb-2 text-lg sm:text-2xl lg:text-xl">
              USP 795 Non-Sterile Compounding
            </h2>
            <p className="text-xs sm:text-sm lg:text-xs">
              Establishes guidelines to minimize errors
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Provides requirements for final product quality
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Packaging & labeling requirement for final products
            </p>
          </div>
          <div className="my-5 lg:rounded-full">
            <h2 className="mb-2 text-lg sm:text-2xl lg:text-xl">
              USP 795 Non-Sterile Compounding
            </h2>
            <p className="text-xs sm:text-sm lg:text-xs">
              Establishes guidelines to minimize errors
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Provides requirements for final product quality
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Packaging & labeling requirement for final products
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg sm:text-2xl lg:text-xl">
              USP 795 Non-Sterile Compounding
            </h2>
            <p className="text-xs sm:text-sm lg:text-xs">
              Establishes guidelines to minimize errors
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Provides requirements for final product quality
            </p>
            <p className="text-xs sm:text-sm lg:text-xs">
              Packaging & labeling requirement for final products
            </p>
          </div>
        </div>

        <Button className="flex w-full items-center gap-1 rounded-full bg-white hover:bg-white sm:w-[164px]">
          <p className="text-[#194894] hover:text-[#194894]">Quality First</p>
          <Image
            src="/assets/images/arrow2.png"
            alt="arrow2"
            width={12}
            height={12}
          />
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/assets/images/pills.png"
          alt="pills"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Standars;
