import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">GALLERY</a>
          <span className="dropBottom"></span>
          <ul>
            <li>
              <a href="#">Tattoos</a>
            </li>
            <li>
              <a href="#">Flash</a>
            </li>
            <li>
              <a href="#">Pet Portraits</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
