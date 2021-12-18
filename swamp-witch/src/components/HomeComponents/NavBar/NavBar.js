import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import logo from "../../../assets/img/logo/sm-logo.JPG";

const NavBar = (props) => {
  return (
    <div className='navWrap'>
          <HashLink smooth className="navLink logoWrap" to="/#mainHeader">
            <img className="navBarLogo" src={logo} alt="swamp witch logo" />
          </HashLink>
    <div id="navBar">
      <div className="bars">
        <ion-icon
          name="menu-outline"
          onClick={() => props.onSideBarClick()}
        ></ion-icon>
      </div>
      <div className="navMenu">
        <HashLink smooth className="navLink" to="/#about">
          About
        </HashLink>
        <HashLink smooth className="navLink" to="/gallery/#galleryTop">
          Gallery
        </HashLink>
        <a
          className="navLink"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
          </a>
        <div></div>
          <HashLink smooth className="navLink" to="/#faq">
          FAQ
        </HashLink>
        <NavLink className="navLink" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navLink" to="/policies">
          Policies
        </NavLink>
      </div>
      </div>
      </div>
  );
};

NavBar.propTypes = {
  onSideBarClick: PropTypes.func,
};

export default NavBar;
