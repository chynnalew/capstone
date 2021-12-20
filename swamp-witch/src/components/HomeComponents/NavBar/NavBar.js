import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import logo from "../../../assets/img/logo/sm-logo.JPG";

const NavBar = (props) => {

  const [showDrop, setShowDrop] = React.useState(false);

  const toggle = () => {
    setShowDrop(!showDrop)
  }

  if (showDrop) {
    return (
      <div className="navWrap">
        <div className="dropdown">
          <div className="dropdownLinks">
            <HashLink smooth onClick={() => { toggle(); props.onTattooClick() }}className="navLink" to="/gallery/#galleryTop">
              Tattoos
            </HashLink>
            <HashLink smooth onClick={() => { toggle(); props.onFlashClick() }} className="navLink" to="/gallery/#galleryTop">
              Flash
            </HashLink>
            <HashLink smooth onClick={() => { toggle(); props.onPetClick() }} className="navLink" to="/gallery/#galleryTop">
              Pet Portraits
            </HashLink>
          </div>
        </div>
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
            <div onClick={toggle} className="navLink" >
              Gallery
            </div>
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
  } else {
    return (
      <div className="navWrap">
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
            <div onClick={toggle} className="navLink" >
              Gallery
            </div>
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
  }

};

NavBar.propTypes = {
  onContactClick: PropTypes.func,
  onSideBarClick: PropTypes.func,
  onTattooClick: PropTypes.func,
  onFlashClick: PropTypes.func,
  onPetClick: PropTypes.func,
};

export default NavBar;
