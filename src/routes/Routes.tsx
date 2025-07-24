import AboutUs from "@/pages/about/About";
import ContactUs from "@/pages/contact/ContactUs";
import Home from "@/pages/home/Home";
import { Routes, Route } from "react-router";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default Router;
