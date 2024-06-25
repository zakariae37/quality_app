"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { registerCards } from "@/constant";
import Image from "next/image";

const Register = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageContainerRef = useRef(null);

  const handleAnimation = () => {
    const containerWidth = imageContainerRef.current.offsetWidth;
    const desiredCardWidth = 300; // Adjust based on your desired card size
    const maxCards = Math.floor(containerWidth / desiredCardWidth); // Calculate max cards that fit

    setCurrentImage((prevIndex) => {
      const nextIndex = (prevIndex + 1) % registerCards.length;
      return nextIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(handleAnimation, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-36">
      <div className="flex flex-col items-center gap-5 lg:items-start lg:text-left">
        <h1 className="font-gelasio text-4xl lg:text-[48px] lg:leading-[50px]">
          We specialize in <br /> medications for
        </h1>
        <p>
          Nec purus adipiscing pellentesque ultrices in <br /> viverra amet. Sit
          egestas mi platea nisl est.
        </p>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-2">
          <Button className="h-[48px] w-[165px] rounded-full bg-[#194894] text-white">
            Register as Provider
          </Button>
          <div className="hidden gap-2 lg:flex"></div>
          <Button className="h-[48px] w-[165px] rounded-full bg-[#00BAD1] text-white">
            Register as Patient
          </Button>
        </div>
      </div>

      <div
        className="relative my-16 flex w-full gap-4 overflow-x-auto lg:w-auto lg:flex-row"
        ref={imageContainerRef}
        style={{ overflowX: "hidden" }} 
      >
        <div className="animate-slide flex gap-2 md:gap-6">
          {registerCards.map((card) => (
            <div key={card.alt} className="w-[300px]">
              {" "}
              {/* Set desired card width */}
              <div className="relative flex items-center gap-4">
                <div className="absolute bottom-8 left-8 z-10 flex h-[52px] w-[230px] items-center justify-between gap-2 rounded-2xl bg-white px-4 font-medium text-[#194894] sm:bottom-4 sm:left-4 sm:h-[42px] sm:w-[200px] xl:bottom-8 xl:left-8 xl:h-[52px] xl:w-[230px]">
                  <p>{card.label}</p>
                  <Image
                    src="/assets/images/arrow2.png"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slide {
          animation: slide-right-left 3s infinite alternate; /* Adjust animation duration and timing as needed */
        }

        @keyframes slide-right-left {
          from {
            transform: translateX(7%);
          } /* Start from the right */
          to {
            transform: translateX(-60%);
          } /* Move to the left */
        }

        @media (max-width: 767px) {
          /* Animation adjustment for small devices like phones */
          @keyframes slide-right-left {
            from {
              transform: translateX(10%);
            } /* Start from the right */
            to {
              transform: translateX(-85%);
            } /* Move more to the left */
          }
        }
        @media (max-width: 767px) {
          .animate-slide {
            animation: slide-right-left 6s infinite alternate; /* Adjust animation duration and timing as needed */
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
