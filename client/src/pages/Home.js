import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { CheckBook } from "../components/Forms/CheckBook";
import { RoomSection } from "../components/RoomSection/RoomSection";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ContactSection } from "../components/ContactSection/ContactSection";


export const Home = () => {
  useTitle("Bay-Ler View Hotel | Weavering Premium Experiences.");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <HeroSection />
    <CheckBook />
    <RoomSection />
    <ContactSection />
    <Footer />

    </>
  )
}
