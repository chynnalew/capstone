import React from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  return (
    <div id='galleryContainer'>
      <h1 className="sectionHeader">Gallery</h1>
    <div id='gallery'>
      {props.photos.map((photo, index) => (
          <div class='photo'>
          <img src={photo.src} alt={photo.alt} key={index}
            onClick={()=>props.onGalleryImageClick(index)}/>
        </div>
      ))}
      </div>
      </div>
  )
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onGalleryImageClick: PropTypes.func,
}
export default Gallery;