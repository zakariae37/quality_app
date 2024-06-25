import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const LearnMore = () => {
  return (
    <div className="my-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-24">
      <h1 className="font-gelasio text-3xl">Our Accreditation</h1>
      <div className="flex gap-4 md:gap-4 lg:gap-32">
        <Image
          src="/assets/images/Group1.png"
          alt="Group1"
          width={130}
          height={130}
          className="mb-4 md:mb-0" 
        />
        <Image
          src="/assets/images/group2.png"
          alt="group2"
          width={130}
          height={130}
          className="mb-4 md:mb-0"
        />
        <Image
          src="/assets/images/Group3.png"
          alt="Group3"
          width={130}
          height={130}
          className="mb-4 md:mb-0" 
        />
      </div>
      <Button className="w-full rounded-full bg-[#194894] text-white md:w-auto">
        <p className="flex items-center gap-1">
          Learn more
          <Image
            src="/assets/images/arrow.png"
            alt="arrow"
            width={14}
            height={14}
          />
        </p>
      </Button>
    </div>
  );
};

export default LearnMore;
