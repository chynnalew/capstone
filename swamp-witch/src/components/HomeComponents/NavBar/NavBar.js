import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PropTypes from "prop-types";

const NavBar = (props) => {

  return (
    <div id="navBar">
      <div className="bars">
        <ion-icon name="menu-outline" onClick={()=>props.onSideBarClick()}></ion-icon>
      </div>
      <div className="navMenu">
        <HashLink smooth className="navLink" to="/#about" >
        About
        </HashLink>
        <HashLink smooth className="navLink" to="/gallery/#galleryTop">
          Gallery
        </HashLink>
        <HashLink smooth className="navLink" to="/#faq" >
          FAQ
        </HashLink>
        <HashLink smooth className="navLink" to="/#mainHeader">
          <h1>logo</h1>
        </HashLink>
        <a
          className="navLink"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
        </a>
        <NavLink className="navLink" to="/contact" >
          Contact
        </NavLink>
        <NavLink className="navLink" to="/policies" >
          Policies
        </NavLink>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onSideBarClick: PropTypes.func,

}

export default NavBar;
