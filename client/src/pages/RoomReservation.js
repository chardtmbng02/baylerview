import { useTitle } from "../Hooks/useTitle";
import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { NavigationBar } from "../components/Navigation/NavigationBar";
import { RoomReservationSection } from "../components/ReservationSection/RoomReservationSection";
import { CheckBook } from "../components/Forms/CheckBook";

export const RoomReservation = () => {
  useTitle("Rooms | Bay-Ler View Hotel");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <NavigationBar />
    <div className="pt-20"></div>
    <CheckBook />
    <RoomReservationSection />
    <Footer />
    </>
  )
}
