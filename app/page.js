import { NewAbout } from "@/components/Home/AboutUs/NewAbout";
import NewContactBanner from "@/components/Home/NewContactBanner";
import NewBanner from "@/components/Home/NewBanner";
import NewProyects from "@/components/Home/Proyects/NewProyects";
export default function Home() {
  return (
    <>
      <NewBanner />
      <NewContactBanner />
      <NewAbout />
      <NewProyects />
    </>
  );
}
