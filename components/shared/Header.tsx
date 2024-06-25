"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { headerImages } from "@/constant";

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageContainerRef = useRef(null);

  const handleAnimation = () => {
    const containerWidth = imageContainerRef.current.offsetWidth;
    const imageWidth = containerWidth / 3;

    setCurrentImage((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex * imageWidth > containerWidth) {
        return 0;
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(handleAnimation, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="my-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="w-full max-w-[509px] px-4 font-gelasio text-[36px] leading-tight md:px-0 md:leading-[40px] lg:text-[48px] lg:leading-[40px]">
          Customized health solutions, always.
        </h1>
        <p className="px-4 text-sm md:px-0 md:text-base">
          Nec purus adipiscing pellentesque ultrices in{" "}
          <br className="hidden md:block" />
          viverra amet. Sit egestas mi platea nisl est.
        </p>
        <Button className="flex h-[48px] w-full max-w-[195px] items-center gap-1 rounded-full bg-[#194894] text-white hover:bg-[#194894] hover:text-white">
          <p>View Our Catalog</p>
          <Image
            src="/assets/images/arrow.png"
            alt="arrow"
            width={16}
            height={16}
          />
        </Button>
      </div>
      <div
        className="relative my-16 overflow-x-hidden"
        ref={imageContainerRef}
        style={{
          width: "100%", // Changed width to 100%
          maxWidth: "100vw", // Added maxWidth to prevent overflow
        }}
      >
        <div className="animate-slide flex gap-4 " style={{ width: "200%" }}>
          {" "}
          {/* Added style for image container */}
          {headerImages.map((image, index) => (
            <div key={image.alt} className="w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={628}
                height={628}
                className="rounded-md"
              />
              {index === headerImages.length - 1 && (
                <div className="absolute bottom-5 right-4 md:bottom-20 md:right-10">
                  <Image
                    src="/assets/images/plus.svg"
                    alt="plu"
                    width={12}
                    height={12}
                    className="md:size-[36px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-slide {
          animation: slide-right-left 6s infinite alternate;
        }

        @keyframes slide-right-left {
          0% {
            transform: translateX(0);
          } /* Start from the initial position */
          20% {
            transform: translateX(0);
          } /* Pause at the start for 2 seconds */
          50% {
            transform: translateX(-50%);
          } /* Move to the left */
          70% {
            transform: translateX(-50%);
          } /* Pause for 2 seconds */
          100% {
            transform: translateX(50);
          } /* Move back to the initial position */
        }
      `}</style>
    </div>
  );
};

export default Header;
