import React from "react";

const Location = () => {
  return (
    <div className="container">
      <div id="location">
        <h1 className="sectionHeader smallHeader">Currently Tattooing at</h1>
        <div className="mapStyle">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0489510424572!2d-122.6388317486075!3d45.52922047899921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0c632c2862d%3A0x39175b36a225cce3!2sAnatomy%20Tattoo!5e0!3m2!1sen!2sus!4v1639262881358!5m2!1sen!2sus"
            loading="lazy"
            title="anatomy tattoo location"
          ></iframe>
        </div>
        <br />
        <br />
        <div className="mapText">
          <a className="shopName" href="https://anatomytattoo.com/">
            <strong>Anatomy Tattoo</strong>
          </a>
          <p>
            2820 NE Sandy Blvd
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
