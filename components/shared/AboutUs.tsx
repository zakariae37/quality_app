import { cards } from "@/constant";
import React from "react";
import Card from "./Card";

const AboutUs = () => {
  return (
    <div className="my-14">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-gelasio text-3xl md:text-[48px]">
          What people are saying about us
        </h1>
        <p className="text-[14px] md:text-[16px]">
          Nec purus adipiscing pellentesque ultrices in viverra amet. Sit
          egestas mi platea nisl est.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.username} className="h-full">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
