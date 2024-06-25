import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { footerLinks } from "@/constant";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-4 flex flex-col p-6">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-x-44">
        <div className="mb-8 flex flex-col items-start md:mb-0">
          <Image
            src="/assets/images/Layer_1.svg"
            alt="logo"
            width={90}
            height={90}
          />
          <h1 className="mt-4 font-gelasio text-2xl font-medium">
            Want to <br />
            see more?
          </h1>
          <p className="mt-2 text-sm">Register to download our catalog </p>
          <Button className="mt-4 flex w-[145px] items-center gap-1 rounded-full bg-[#194894]">
            <p>Register</p>
            <Image
              src="/assets/images/arrow.png"
              alt="arrow"
              width={12}
              height={12}
            />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="mb-2 font-semibold">{section.title}</h2>
              {section.links ? (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1">
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <p>{section.address.location}</p>
                  <p>{section.address.phone}</p>
                  <p>{section.address.email}</p>
                  <div className="mt-4 flex gap-4">
                    <div className="rounded-full bg-[#194894] p-2 text-white">
                      <FaTwitter />
                    </div>
                    <div className="rounded-full bg-[#194894] p-2 text-white">
                      <FaFacebook />
                    </div>
                    <div className="rounded-full bg-[#194894] p-2 text-white">
                      <FaInstagram />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="border-light-blue-800 my-6 border-t-2" />
      <div className="my-6 flex items-center justify-center text-sm ">
        <p className="text-center">
          Quality Compounding Rx of America © 2024 | All rights reserved |
          Powered by Webloo
        </p>
      </div>
    </div>
  );
};

export default Footer;
