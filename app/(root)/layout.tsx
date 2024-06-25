import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Synergy from "@/components/shared/Synergy";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-10">
      <Navbar />
      <div>{children}</div>
      <Synergy />
      <Footer />
    </div>
  );
};

export default Layout;
