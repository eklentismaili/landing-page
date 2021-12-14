import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import "./assets/scss/main.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <div className="pages-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
