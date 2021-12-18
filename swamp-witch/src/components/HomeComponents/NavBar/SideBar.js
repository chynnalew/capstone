import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const SideBar = (props) => {
  const scrollWithOffset = (element) => {
    const yCoordinate = element.getBoundingClientRect().top;
    window.scrollTo({ top: yCoordinate, behavior: "smooth" });
  };

  return (
    <div id="sideBar">
      <div className="closeIcon">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
      <div className="navMenu2">
        <HashLink onClick={()=>props.onSideBarClose()} className="navLink2" to="/#about" scroll={scrollWithOffset}>
          About
        </HashLink>
        <NavLink className="navLink2" to="/gallery" scroll={scrollWithOffset}>
          Gallery
        </NavLink>
        <HashLink className="navLink2" to="/#faq" scroll={scrollWithOffset}>
          FAQ
        </HashLink>
        <a
          className="navLink2"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
        </a>
        <NavLink className="navLink2" to="/contact" scroll={scrollWithOffset}>
          Contact
        </NavLink>
        <NavLink className="navLink2" to="/policies" scroll={scrollWithOffset}>
          Policies
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;