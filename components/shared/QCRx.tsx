import { QCRXValues } from "@/constant";
import React from "react";

const QCRx = () => {
  return (
    <div>
      <div className="w-full lg:w-[893px]">
        <p className="text-[20px]">
          <span
            className="underline"
            style={{ textDecorationColor: "#00BAD1" }}
          >
            Why Choose QCRx?
          </span>
        </p>
      </div>
      <h1 className="mt-4 font-gelasio text-[26px] md:leading-[46px] lg:text-[48px]">
        Quality and Customer Service are the <br className="hidden md:inline" />{" "}
        most important elements of a pharmacy.
      </h1>
      <div className="my-8 grid grid-cols-1 gap-y-4 sm:w-[462px] md:my-16 lg:w-full lg:grid-cols-2">
        {QCRXValues.map((value, index) => (
          <div
            key={value.title}
            className={`relative flex flex-col gap-4 border-b-2 border-blue-200  ${index === QCRXValues.length - 1 ? "" : "lg:pb-0"}  lg:max-w-[570px]`}
          >
            <h3 className="text-[24px] font-medium">{value.title}</h3>
            <p className="mb-4 w-full lg:w-[462px]">{value.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QCRx;
