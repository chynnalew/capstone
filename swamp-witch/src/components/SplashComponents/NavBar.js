import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-scroll';

const NavBar = (props) => {
  return (
    <nav className='sticky'>
      <ul>
        <li>
          <Link onClick={()=>props.onMainComponentsClick()} to='about' smooth={true} duration={1000}>ABOUT</Link>
        </li>
        <li>
          <a >GALLERY</a>
          <span className="dropBottom"></span>
          <ul>
            <li>
              <Link onClick={()=>props.onTattoosGalleryClick()} to='gallery' smooth={true} duration={500}>Tattoos</Link>
            </li>
            <li>
              <Link onClick={()=>props.onFlashGalleryClick()} to='gallery' smooth={true} duration={500}>Flash</Link>
            </li>
            <li>
              <Link onClick={()=>props.onPetGalleryClick()} to='gallery' smooth={true} duration={500}>Pet Portraits</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={()=>props.onMainComponentsClick()} to='faq' smooth={true} duration={1000}>FAQ</Link>
        </li>
        <li>
          <a href="https://swampwitchtattoos.bigcartel.com/">SHOP</a>
        </li>
        <li>
          <Link onClick={()=>props.onContactClick()} to='contact' smooth={true} duration={1000}>CONTACT</Link>
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
