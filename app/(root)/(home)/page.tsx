import AboutUs from "@/components/shared/AboutUs";
import FAQ from "@/components/shared/FAQ";
import Header from "@/components/shared/Header";
import LearnMore from "@/components/shared/LearnMore";
import Map from "@/components/shared/Map";
import Pictures from "@/components/shared/Pictures";
import QCRx from "@/components/shared/QCRx";
import Register from "@/components/shared/Register";
import Services from "@/components/shared/Services";
import Standars from "@/components/shared/Standars";

export default function Home() {
  return (
    <>
      <Header />
      <QCRx />
      <Register />
      <Pictures />
      <Services />
      <AboutUs />
      <Map />
      <Standars />
      <FAQ />
      <hr className="mt-16 w-full border-t-2" />
      <LearnMore />
      
    </>
  );
}
