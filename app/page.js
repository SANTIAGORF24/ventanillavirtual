import { NewAbout } from "@/components/Home/AboutUs/NewAbout";
import NewContactBanner from "@/components/Home/NewContactBanner";
import NewBanner from "@/components/Home/NewBanner";
import NewProyects from "@/components/Home/Proyects/NewProyects";
import Team from "@/components/Home/Team/Team";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Clientes from "@/components/Home/Clientes/Clientes";
export default function Home() {
  return (
    <>
      <NewBanner />
      <NewContactBanner />
      <NewAbout />
      <NewProyects />
      <Clientes />
      <Team />
      <ContactUs />
    </>
  );
}
