import "./App.css";
import { useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";
import { Location } from "./pages/Location";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Newsletter } from "./pages/Newsletter";
import { DevTeam } from "./pages/DevTeam";
import { Playground } from "./pages/Playground";
import { ErrorMessage } from "./components/ErrorMessage";
import { RoomsList } from "./pages/RoomsList";
import { AboutUs } from "./pages/AboutUs";
import { Experience } from "./pages/Experience";
import { Login } from "./pages/Login";

import { Dashboard } from "./admin-pages/Dashboard";
import { AdminPlayground } from "./admin-pages/AdminPlayground";


function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Client */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/location" element={<Location />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/teamdevelopment" element={<DevTeam />} />
          <Route path="/rooms" element={<RoomsList />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/admin" element={<Login />} />
           
           {/* Admin */}
           <Route path="/admin/dashboard" element={<Dashboard />} />
           <Route path="/admin/playground" element={<AdminPlayground />} />


           {/* 404 Handler Page */}
          <Route path="*" element={<ErrorMessage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
