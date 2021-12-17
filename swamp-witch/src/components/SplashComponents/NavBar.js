import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll';

const NavBar = (props) => {
  return (
    <nav className='sticky'>
      <ul>
        <li>
          <Link to='about' smooth={true} duration={1000} delay={100}>ABOUT</Link>
        </li>
        <li>
          <a >GALLERY</a>
          <span className="dropBottom"></span>
          <ul>
            <li>
              <Link onClick={()=>props.onTattoosGalleryClick()} to='galleryContainer' smooth={true} duration={1000} delay={100}>Tattoos</Link>
            </li>
            <li>
              <Link onClick={()=>props.onFlashGalleryClick()} to='galleryContainer' smooth={true} duration={1000} delay={100}>Flash</Link>
            </li>
            <li>
              <Link onClick={()=>props.onPetGalleryClick()} to='galleryContainer' smooth={true} duration={1000} delay={100}>Pet Portraits</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='faq' smooth={true} duration={1000} delay={100}>FAQ</Link>
        </li>
        <li>
          <a href="https://swampwitchtattoos.bigcartel.com/">SHOP</a>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={1000} delay={100}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  onTattoosGalleryClick: PropTypes.func,
  onFlashGalleryClick: PropTypes.func,
  onPetGalleryClick: PropTypes.func,
}
export default NavBar;
