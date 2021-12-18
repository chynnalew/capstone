import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SideBar = (props) => {
  const [showDrop, setShowDrop] = React.useState(false);

  const toggle = () => {
    setShowDrop(!showDrop);
  };

  if (showDrop) {
  return (
    <div id="sideBar">
      <div className="closeIcon" onClick={() => props.onSideBarClose()}>
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
      <div className="navMenu2">
        <HashLink
          smooth
          onClick={() => props.onSideBarClose()}
          className="navLink2"
          to="/#about"
        >
          About
        </HashLink>
        <p style={{margin:'0'}}
            onClick={() => toggle()}
            className="navLink2"
          >
            Gallery
          </p>
        <HashLink
          smooth
          onClick={() => {
            toggle();
            props.onTattooClick();
            props.onSideBarClose()
          }}
          className="smaller"
          to="/gallery/#galleryTop"
        >
          Tattoos
        </HashLink>
        <HashLink
          smooth
          onClick={() => {
            toggle();
            props.onFlashClick();
            props.onSideBarClose()
          }}
          className="smaller"
          to="/gallery/#galleryTop"
        >
          Flash
        </HashLink>
        <HashLink
          smooth
          onClick={() => {
            toggle();
            props.onPetClick();
            props.onSideBarClose()
          }}
          className="smaller"
          to="/gallery/#galleryTop"
        >
          Pet Portraits
        </HashLink>
        <HashLink
          onClick={() => props.onSideBarClose()}
          smooth
          className="navLink2"
          to="/#faq"
        >
          FAQ
        </HashLink>
        <a
          onClick={() => props.onSideBarClose()}
          className="navLink2"
          href="https://swampwitchtattoos.bigcartel.com/"
          target="_blank"
        >
          Shop
        </a>
        <NavLink
          onClick={() => props.onSideBarClose()}
          className="navLink2"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          onClick={() => props.onSideBarClose()}
          className="navLink2"
          to="/policies"
        >
          Policies
        </NavLink>
      </div>
    </div>
  );
  } else {
    return (
      <div id="sideBar">
        <div className="closeIcon" onClick={() => props.onSideBarClose()}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div className="navMenu2">
          <HashLink
            smooth
            onClick={() => props.onSideBarClose()}
            className="navLink2"
            to="/#about"
          >
            About
          </HashLink>
          <p style={{margin:'0'}}
            onClick={() => toggle()}
            className="navLink2"
          >
            Gallery
          </p>
          <HashLink
            onClick={() => props.onSideBarClose()}
            smooth
            className="navLink2"
            to="/#faq"
          >
            FAQ
          </HashLink>
          <a
            onClick={() => props.onSideBarClose()}
            className="navLink2"
            href="https://swampwitchtattoos.bigcartel.com/"
            target="_blank"
          >
            Shop
          </a>
          <NavLink
            onClick={() => props.onSideBarClose()}
            className="navLink2"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => props.onSideBarClose()}
            className="navLink2"
            to="/policies"
          >
            Policies
          </NavLink>
        </div>
      </div>
    );
}
};

export default SideBar;
