import React from "react";
import { NavLink } from "react-router-dom";

const NavBar2 = () => {
  return (
    <div id="navBar2">
      <div className="bars">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="navMenu">
        <NavLink className="navLink" to="/about" activeStyles>
          About
        </NavLink>
        <NavLink className="navLink" to="/gallery" activeStyles>
          Gallery
        </NavLink>
        <NavLink className="navLink" to="/faq" activeStyles>
          FAQ
        </NavLink>
        <div to="/">
        <h1>logo</h1>
      </div>
        <div className="navLink" to="/shop" activeStyles>
          Shop
        </div>
        <div className="navLink" to="/contact" activeStyles>
          Contact
        </div>
        <div className='navLink' to='/policies' activeStyles>
          Policies
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
