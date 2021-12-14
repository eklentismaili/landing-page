import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import "./assets/scss/main.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <div className="pages-wrapper">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

//Pages

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

export default App;
