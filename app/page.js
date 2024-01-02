import TestSwiper from "@/components/Home/AboutUs/TestSwiper";
import Banner from "@/components/Home/Banner";
import ContactBanner from "@/components/Home/ContactBanner";
import Proyects from "@/components/Home/Proyects/Proyects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <ContactBanner />
      <Proyects />
    </>
  );
}
