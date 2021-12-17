import React from 'react';

const Gallery = (props) => {
  return (
    <div id='gallery'>
      {props.photos.map((photo, index) => (
          <div class='photo'>
          <img cass='galleryImage' src={photo.src} alt={photo.alt} key={index}/>
          </div>
      ))}
    </div>
  )
}

export default Gallery;