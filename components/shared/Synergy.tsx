import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Synergy = () => {
  return (
    <div className="mt-6 flex h-[467px] w-full flex-col items-center justify-center gap-8 rounded-2xl bg-[#194894] px-4 text-center lg:h-[567px]">
      <h1 className="font-gelasio text-3xl text-white sm:text-4xl lg:text-5xl">
        Discover the perfect synergy <br className="hidden md:block" /> between
        health and partnership.
      </h1>
      <p className="text-base text-white sm:text-lg lg:text-xl">
        Click to unlock a treasure trove of insights and products that{" "}
        <br className="hidden md:block" /> elevate both your well-being and
        relationships.
      </p>
      <Button className="flex items-center gap-1 rounded-full bg-white text-[#194894]">
        <p>Register for full catalog</p>
        <Image
          src="/assets/images/arrow2.png"
          alt="arrow2"
          width={14}
          height={14}
        />
      </Button>
    </div>
  );
};

export default Synergy;
