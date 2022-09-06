import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const navLinks = [
  {
    display: "About",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menu = () => menuRef.classList.toggle("active_menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <Link to={"/"}>
            <div className="logo">
              <h2 className="d-flex align-items-center">
                <i class="ri-pantone-line"></i> Learners.
              </h2>
            </div>
          </Link>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menu}>
              <h2 className="nav_list">
                <Link to={"/about"}>About</Link>
              </h2>
            </div>
            <div className="nav_right"></div>
          </div>

          <div className="mobile_menu">
            <span>
              <i class="ri-menu-line" onClick={menu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
