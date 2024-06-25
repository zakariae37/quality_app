import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:mt-24">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="font-gelasio text-[36px] font-medium  lg:text-[48px]">
          Proudly serving an ever-expanding <br className="hidden md:block"/>
          list of United States
        </h1>
        <p className="text-sm">
          Don&apos;t see your state? Tell us where you are.
        </p>
        <Button className="w-[162px] rounded-full bg-[#194894] text-white hover:bg-[#194894] hover:text-white">
          <p>Contact Us</p>
          <Image
            src="/assets/images/arrow.png"
            alt="arrow"
            width={14}
            height={14}
          />
        </Button>
      </div>
      <div>
        <Image
          src="/assets/images/map.png"
          alt="map"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default Map;
