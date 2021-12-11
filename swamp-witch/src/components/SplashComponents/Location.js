import React from "react";
import MapComponent from "./MapComponent";

const Location = () => {
  return (
    <div id="location">
      <h1 className="sectionHeader">Current Shop</h1>
      <div className="container">
        <div></div>
        <div className="mapStyle">
          <MapComponent />
        </div>
        <div className="mapText">
          <a clasName='shopName' href='https://anatomytattoo.com/'>Anatomy Tattoo</a>
          <p>2820 NE Sandy Blvd
            <br />
            Portland, OR 97232
            <br />
            (503) 231-1199
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
