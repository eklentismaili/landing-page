import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "./useClickOutside";
import logo from "../assets/images/logo.png";



const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const modalRef = useRef();

  const handleSidebar = () => {
    setSideBar(!sideBar);
  };

  useClickOutside(modalRef, () => {
    if(sideBar) setSideBar(false);
  })

  return (
    <div>
      <header className="header">
        <div className="navContainer container">
          <span className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <nav>
            <ul
            ref={modalRef}
              className="mainNav"
              style={sideBar ? { transform: "translateX(0)" } : null}
            >
              <li>
                <Link className="mainNavLink" to="/" onClick={handleSidebar}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="mainNavLink"
                  to="/contact"
                  onClick={handleSidebar}
                >
                  Contact 2
                </Link>
              </li>
              <li>
                <Link
                  className="mainNavLink"
                  to="/about"
                  onClick={handleSidebar}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleSidebar}
            className={`navToggle ${sideBar ? "open" : null}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
