import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookNow } from "./pages/BookNow";
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
import { Accounts } from "./admin-pages/Accounts";
import { AdminPlayground } from "./admin-pages/AdminPlayground";
import { AddUser } from "./admin-pages/AddUser";
import { UpdateUser } from "./admin-pages/UpdateUser";

import { Messages } from "./admin-pages/Messages";
import { Newsletters } from "./admin-pages/Newsletters";
import { Testimonials } from "./admin-pages/Testimonials";

import { FeaturedRoomLists } from "./admin-pages/Rooms/FeaturedRoomLists";
import { StandardRoomLists } from "./admin-pages/Rooms/StandardRoomLists";
import { DeluxeRoomLists } from "./admin-pages/Rooms/DeluxeRoomLists";
import { SuiteRoomLists } from "./admin-pages/Rooms/SuiteRoomLists";

//Deleting Records
import { DeleteAccount } from "./admin-components/Accounts/DeleteAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-reservation" element={<BookNow />} />
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

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/accounts" element={<Accounts />} />
          <Route path="/admin/accounts/add" element={<AddUser />} />
          <Route path="/admin/accounts/edit/:id" element={<UpdateUser />} />
          <Route path="/admin/accounts/delete/:id" element={<DeleteAccount />} />

          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/newsletters" element={<Newsletters />} />
          <Route path="/admin/testimonials" element={<Testimonials />} />

          <Route path="/admin/rooms/featured" element={<FeaturedRoomLists />} />
          <Route path="/admin/rooms/standard" element={<StandardRoomLists />} />
          <Route path="/admin/rooms/deluxe" element={<DeluxeRoomLists />} />
          <Route path="/admin/rooms/suite" element={<SuiteRoomLists />} />



         


          <Route path="/admin/playground" element={<AdminPlayground />} />

          {/* 404 Handler Page */}
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
