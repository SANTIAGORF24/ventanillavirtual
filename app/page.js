
import Banner from "@/components/Home/Banner";
import ContactBanner from "@/components/Home/ContactBanner";
import Proyects from "@/components/Home/Proyects/Proyects";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import Banner from "@/components/Home/Banner";
import ContactBanner from "@/components/Home/ContactBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <ContactBanner />
      <AboutUs />
      <Proyects />
    </>
  );
}
