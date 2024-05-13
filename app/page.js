import NewContactBanner from "@/components/Home/NewContactBanner";
import NewBanner from "@/components/Home/NewBanner";
import NewProyects from "@/components/Home/Proyects/NewProyects";
import Team from "@/components/Home/Team/Team";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Clientes from "@/components/Home/Clientes/Clientes";
import WhatsAppButton from "@/components/Home/WhatsAppButton/WhatsAppButton";
import AboutSectionWithCards from "@/components/Home/AboutUs/AboutSectionWithCards";
import Index from "@/components/Index";

export default function Home() {
  return (
    <>
      <Index />
      <NewBanner />
      <NewContactBanner />
      <AboutSectionWithCards />
      <NewProyects />
      <Clientes />
      <Team />
      <ContactUs />
      <WhatsAppButton />
    </>
  );
}
