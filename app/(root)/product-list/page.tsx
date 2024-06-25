"use client";
import Product from "@/components/shared/Product";
import { Input } from "@/components/ui/input";
import { dosages, filters, products } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const ProductListPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showDosages, setShowDosages] = useState(false);

  return (
    <div className="flex flex-wrap">
      {/* Filters Section */}
      <div className="w-full p-4 md:w-1/4">
        <div className="relative">
          <h2 className="font-gelasio text-2xl">Search</h2>
          <div className="relative my-4 flex items-center">
            <Input
              type="text"
              placeholder="Search Product"
              className="rounded-full border border-gray-300 py-2 pl-6 focus:border-blue-500 focus:outline-none lg:w-[300px]"
            />
            <div className="absolute right-5 top-1/2  -translate-y-1/2 md:hidden lg:block">
              <Image
                src="/assets/images/search.png"
                alt="search"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
        <hr className="mt-8 w-full border-t-2" />
        <div className="my-6">
          <div className="flex items-center justify-between">
            <h2 className="font-gelasio text-2xl">Filters</h2>
            <Image
              src="/assets/images/filter.png"
              alt="filter"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            />
          </div>
          <div
            className={`my-3 flex flex-col transition-all duration-300 ${
              showFilters ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            {filters.map((filter, index) => (
              <label
                key={index}
                className="my-2 flex items-center justify-between"
              >
                <input type="checkbox" className="mr-2" />
                {filter}
                <FaArrowDown />
              </label>
            ))}
          </div>
          <hr className="my-8 w-full border-t-2" />

          <div className="flex items-center justify-between">
            <h2 className="text-xl">Dosage Form</h2>
            {showDosages ? (
              <FaArrowUp
                className="cursor-pointer"
                onClick={() => setShowDosages(!showDosages)}
              />
            ) : (
              <FaArrowDown
                className="cursor-pointer"
                onClick={() => setShowDosages(!showDosages)}
              />
            )}
          </div>
          <div
            className={`my-3 flex flex-col transition-all duration-300 ${
              showDosages ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            {dosages.map((filter, index) => (
              <label key={index} className="my-2 flex gap-2">
                <input type="checkbox" className="mr-2" />
                {filter}
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Products Section */}
      <div className="w-full p-4 md:w-3/4">
        {/* Hide on small and medium devices */}
        <div className="my-2 hidden items-center justify-between lg:flex">
          <h1 className="font-gelasio text-[30px]">Our Catalog</h1>
          <div className="flex items-center gap-2 text-[14px] text-[#666767]">
            <p>Showing 1-12 of 12 Products</p>
            <div className="flex items-center gap-1">
              <p>Sort by:</p>
              <Select>
                <SelectTrigger className="w-[140px] border-none focus:outline-none focus:ring-0 focus-visible:ring-transparent ">
                  <p className="text-black">Most Popular</p>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 custom-range:grid-cols-3">
          {products.map((product) => (
            <div key={product.alt} className="p-2">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
