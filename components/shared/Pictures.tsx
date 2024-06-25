/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/Q1.png", alt: "Image 1" },
  { src: "/assets/images/Q2.png", alt: "Image 2" },
  { src: "/assets/images/Q3.png", alt: "Image 3" },
  { src: "/assets/images/Q4.png", alt: "Image 4" },
  { src: "div-placeholder", alt: "Div Placeholder" },
  { src: "/assets/images/Q5.png", alt: "Image 5" },
  { src: "/assets/images/Q6.png", alt: "Image 6" },
  { src: "/assets/images/Q7.png", alt: "Image 7" },
  { src: "/assets/images/Q8.png", alt: "Image 8" },
];

const getOffsetX = () => {
  if (window.innerWidth >= 1024) {
    return 500; // Large devices like laptops
  }
  if (window.innerWidth >= 768) {
    return 220; // Medium devices like tablets
  }
  return 120; // Small devices like phones
};

const getOffsetY = () => {
  if (window.innerWidth >= 1024) {
    return 300; // Large devices
  } else if (window.innerWidth >= 768) {
    return 200; // Medium devices
  } else {
    return 100; // Small devices
  }
};

const getArcRadius = () => {
  if (window.innerWidth >= 1024) {
    return 300; // Large devices
  } else if (window.innerWidth >= 768) {
    return 200; // Medium devices
  } else {
    return 100; // Small devices
  }
};

const createArcPositions = (
  offsetX: number,
  offsetY: number,
  arcRadius: number
) => {
  return images.map((_, index, arr) => {
    const angle = (Math.PI / (arr.length - 1)) * index - Math.PI / 250;
    return {
      x: -arcRadius * Math.cos(angle) + offsetX,
      y: -arcRadius * Math.sin(angle) + offsetY,
    };
  });
};

const getCellSize = () => {
  if (window.innerWidth >= 1024) {
    return 350; // Large devices like laptops
  }
  if (window.innerWidth >= 768) {
    return 180; // Medium devices like tablets
  }
  return 120; // Small devices like phones
};

const createGridPositions = (cellSize: number) => {
  return images.map((_, index) => {
    const imageSize = window.innerWidth >= 1024 ? 200 : 120; // Size of your image
    const margin = (cellSize - imageSize) / 1; // Calculate margin for centering
    const x = (index % 3) * cellSize + margin;
    const y = Math.floor(index / 3) * cellSize + margin;
    return { x, y };
  });
};

const getTransitionDuration = () => {
  if (window.innerWidth < 768) {
    return 2; // Longer duration for small devices
  }
  return 1; // Default duration
};

const Pictures = () => {
  const [positions, setPositions] = useState(
    createGridPositions(getCellSize())
  );
  const [isGrid, setIsGrid] = useState(true);

  const togglePositions = () => {
    const offsetX = getOffsetX();
    const offsetY = getOffsetY();
    const arcRadius = getArcRadius();
    setPositions(
      isGrid
        ? createArcPositions(offsetX, offsetY, arcRadius)
        : createGridPositions(getCellSize())
    );
    setIsGrid(!isGrid);
  };

  useEffect(() => {
    const timer = setInterval(togglePositions, 3000);
    return () => clearInterval(timer);
  }, [isGrid]);

  useEffect(() => {
    const handleResize = () => {
      const offsetX = getOffsetX();
      const offsetY = getOffsetY();
      const arcRadius = getArcRadius();
      setPositions(
        isGrid
          ? createGridPositions(getCellSize())
          : createArcPositions(offsetX, offsetY, arcRadius)
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isGrid]);

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="parent-container mt-20">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="font-gelasio text-[36px] leading-[48px] lg:text-[48px]">
          A Picture&apos;s Worth <br /> a Thousand Words
        </h1>
        <div className="mt-6 flex items-center gap-1 text-sm">
          <FaArrowRotateRight />
          <p>Keep scrolling</p>
        </div>
      </div>
      <div className="mb-10 flex items-center justify-center">
        <Button
          onClick={togglePositions}
          className="flex h-[30px] w-[110px] items-center gap-2 rounded-full bg-[#194894] text-white hover:bg-[#194894] hover:text-white md:h-[48px] md:w-[187px]"
        >
          <p className="text-xs md:text-sm">Toggle Position</p>
          <Image
            src="/assets/images/arrow.png"
            alt="arrow"
            height={12}
            width={12}
          />
        </Button>
      </div>
      <div className=" overflow-hidden">
        <div className="relative mx-5 h-[400px] w-full overflow-hidden md:mx-16 md:h-[600px] lg:mx-0 lg:h-[1200px] xl:w-[1400px]">
          {images.map((image, index) =>
            image.src === "div-placeholder" ? (
              <motion.div
                key={index}
                initial={{
                  x: positions[index].x,
                  y: positions[index].y,
                }}
                animate={{ x: positions[index]?.x, y: positions[index]?.y }}
                transition={{ duration: getTransitionDuration() }}
                className="absolute flex flex-col items-center justify-center gap-4 rounded-lg text-center"
              >
                {/* This div will not be animated */}
                <div className="mr-4 grid size-full place-items-center gap-2 md:ml-5 md:mr-0 md:mt-10 md:gap-4 lg:ml-20 lg:mt-24 ">
                  <p className="font-gelasio text-base md:text-2xl lg:text-3xl">
                    Tour QCRx
                  </p>
                  <Button className="flex h-[30px] w-[80px] items-center gap-2 rounded-full bg-[#194894] text-white hover:bg-[#194894] hover:text-white md:h-[48px] md:w-[120px] lg:w-[187px]">
                    <p className="text-[8px] md:text-sm">View Tour Now</p>
                    <Image
                      src="/assets/images/arrow.png"
                      alt="arrow"
                      height={12}
                      width={12}
                    />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={image.src}
                initial={{
                  x: positions[index].x,
                  y: positions[index].y,
                }}
                animate={{ x: positions[index]?.x, y: positions[index]?.y }}
                transition={{ duration: getTransitionDuration() }}
                className="absolute rounded-lg md:w-[325px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className="object-contain md:w-[150px] lg:w-[220px] xl:w-[325px]"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
