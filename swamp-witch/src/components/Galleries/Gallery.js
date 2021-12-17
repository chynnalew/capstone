import React from 'react';
import Lightbox from './Lightbox';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  return (
    <div id='gallery'>
      {props.photos.map((photo, index) => (
          <div class='photo'>
          <img cass='galleryImage' src={photo.src} alt={photo.alt} key={index}
            onClick={()=>props.onGalleryClick(index)}/>
        </div>
      ))}
      <Lightbox whenCloseClicked={props.onCloseClick}/>
    </div>
  )
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onGalleryClick: PropTypes.func,
  onCloseClick: PropTypes.func
}
export default Gallery;