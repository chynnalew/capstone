import React from 'react';
import MapComponent from './MapComponent';

const Location = () => {
  return (
    <div id='location'>
      <h1 class='sectionHeader'>Current Shop</h1>
      <div class='mapStyle'>
        <MapComponent />
      </div>
      <div class='mapText'>
        <h1>Anatomy Tattoo</h1>
      </div>
    </div>
  )
}

export default Location;