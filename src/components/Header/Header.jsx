import React from "react";
import { Container } from "reactstrap";
import "./Header.css"

const navLiks = [
  { display: "Home", url: "#home" },
  { display: "About", url: "#about" },
  { display: "Service", url: "#service" },
  { display: "Portfolio", url: "#portfolio" },
  { display: "Contact", url: "#contact" },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex alig-item-center justify-content-between">
          <div className="logo">
            <h5>İhlas</h5>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              {navLiks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right d-flex alig-items-center gap-4">
            <button className="btn">Let's Talk</button>
            <span className="mobile__menu">
              <i class="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
