import React from 'react';

const Gallery = (props) => {
  return (
    <div id='gallery'>
      {props.photos.map((photo, index) => (
          <div class='photo'>
            <img src={photo.src} alt={photo.alt} />
          </div>
      ))}
    </div>
  )
}

export default Gallery;