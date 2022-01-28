import { useEffect } from "react";
import RouterWrapper from "./RouterWrapper";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./assets/scss/main.scss";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="pages-wrapper">
          <RouterWrapper />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
