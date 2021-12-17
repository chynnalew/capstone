import React from 'react';
import PropTypes from 'prop-types';

const Lightbox = (props) => {
  return (
    <div className='lightBox'>
      <div className='popUp'>
      <ion-icon name="close-circle-outline" onClick={()=>props.onCloseClick()}></ion-icon>

      </div>
    </div>
  )
}

Lightbox.propTypes = {
  onCloseClick: PropTypes.func,
  image: PropTypes.object
}

export default Lightbox;