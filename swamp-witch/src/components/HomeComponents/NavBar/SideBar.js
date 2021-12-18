import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const SideBar = (props) => {
  return (
    <div id="sideBar">
      <div className="closeIcon">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
      <div className="navMenu2">
        <HashLink smooth onClick={()=>props.onSideBarClose()} className="navLink2" to="/#about">
          About
        </HashLink>
        <NavLink onClick={()=>props.onSideBarClose()} className="navLink2" to="/gallery" >
          Gallery
        </NavLink>
        <HashLink onClick={()=>props.onSideBarClose()} smooth className="navLink2" to="/#faq" >
          FAQ
        </HashLink>
        <a onClick={()=>props.onSideBarClose()}
          className="navLink2"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
        </a>
        <NavLink onClick={()=>props.onSideBarClose()} className="navLink2" to="/contact">
          Contact
        </NavLink>
        <NavLink onClick={()=>props.onSideBarClose()} className="navLink2" to="/policies" >
          Policies
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;