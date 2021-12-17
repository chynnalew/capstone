import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

  const scrollWithOffset = (element) => {
    const yCoordinate = element.getBoundingClientRect().top;
    window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
}

  return (
    <div id="navBar">
      <div className="bars">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="navMenu">
        <HashLink className="navLink" to="/#about" scroll={scrollWithOffset}>
        About
        </HashLink>
        <NavLink className="navLink" to="/gallery" scroll={scrollWithOffset}>
          Gallery
        </NavLink>
        <HashLink className="navLink" to="/#faq" scroll={scrollWithOffset}>
          FAQ
        </HashLink>
        <NavLink className="navLink" to="/">
          <h1>logo</h1>
        </NavLink>
        <a
          className="navLink"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
        </a>
        <NavLink className="navLink" to="/contact" scroll={scrollWithOffset}>
          Contact
        </NavLink>
        <NavLink className="navLink" to="/policies" scroll={scrollWithOffset}>
          Policies
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
