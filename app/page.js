import NewBanner from "@/components/Home/NewBanner";
import NewProyects from "@/components/Home/Proyects/NewProyects";
import Team from "@/components/Home/Team/Team";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Clientes from "@/components/Home/Clientes/Clientes";
import AboutSectionWithCards from "@/components/Home/AboutUs/AboutSectionWithCards";

export default function Home() {
  return (
    <>
      <NewBanner />
      <AboutSectionWithCards />
      <NewProyects />
      <Clientes />
    </>
  );
}
