import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { ExperienceSection } from "../components/ExperienceSection/ExperienceSection"
import { Footer } from "../components/Footer/Footer"
import { NavigationBar } from "../components/Navigation/NavigationBar"

export const Experience = () => {
  useTitle("Experiences | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <ExperienceSection />
    <Footer />
    </>
  )
}
