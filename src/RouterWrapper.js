import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Packages from "./pages/Packages";
import Package from "./pages/Package";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:packageId" element={<Package />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
};

export default RouterWrapper;
