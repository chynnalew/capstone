import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a onClick={()=>props.onMainComponentsClick()} href="#about">ABOUT</a>
        </li>
        <li>
          <a onClick={()=>props.onTattoosGalleryClick()}>GALLERY</a>
          <span className="dropBottom"></span>
          <ul>
            <li>
              <a onClick={()=>props.onTattoosGalleryClick()}>Tattoos</a>
            </li>
            <li>
              <a onClick={()=>props.onFlashGalleryClick()}>Flash</a>
            </li>
            <li>
              <a onClick={()=>props.onPetGalleryClick()}>Pet Portraits</a>
            </li>
          </ul>
        </li>
        <li>
          <a onClick={()=>props.onMainComponentsClick()} href="#faq">FAQ</a>
        </li>
        <li>
          <a href="https://swampwitchtattoos.bigcartel.com/">SHOP</a>
        </li>
        <li>
          <a onClick={()=>props.onContactClick()}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  onMainComponentsClick: PropTypes.func,
  onTattoosGalleryClick: PropTypes.func,
  onFlashGalleryClick: PropTypes.func,
  onPetGalleryClick: PropTypes.func,
  onContactClick: PropTypes.func,
}
export default NavBar;
