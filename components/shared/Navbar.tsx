"use client";
import { navlinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-2 py-8">
      <Image
        src="/assets/images/Layer_1.svg"
        alt="logo"
        width={117}
        height={36}
      />
      <div className="hidden items-center gap-8 lg:flex">
        {navlinks.map((link) => (
          <Link
            key={link.label}
            href={link.value}
            className="text-[14px] font-medium"
          >
            <p
              style={
                link.label === "Providers"
                  ? { color: "#194894", textDecoration: "underline" }
                  : {}
              }
            >
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="hidden items-center gap-6 lg:flex">
        <Link href="/login" className="text-[#194894]">
          Log In
        </Link>
        <Button className="h-[48px] w-[117px] rounded-full bg-[#194894] hover:bg-[#194894]">
          Register
        </Button>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaX className="size-6 text-[#194894]" />
          ) : (
            <FaBars className="size-6 text-[#194894]" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute inset-x-0 top-16 bg-white shadow-md lg:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            {navlinks.map((link) => (
              <Link
                key={link.label}
                href={link.value}
                className="text-[14px] font-medium"
              >
                <p
                  style={
                    link.label === "Providers"
                      ? { color: "#194894", textDecoration: "underline" }
                      : {}
                  }
                >
                  {link.label}
                </p>
              </Link>
            ))}
            <Link href="/login" className=" text-[#194894]">
              <p className="font-medium">Log In</p>
            </Link>
            <Button className="h-[48px] w-[117px] rounded-full bg-[#194894] font-medium hover:bg-[#194894]">
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
