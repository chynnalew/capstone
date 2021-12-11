import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapComponent extends Component {
  
  render() {
    const containerStyle = {
      height: '300px',
      width: '300px'
    }
    const initialCenter={
      lat: 45.52975,
      lng: -122.63662
    }
    return (
      <Map
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={15}
        initialCenter={initialCenter}>
        <Marker name='Anatomy Tattoo'/>
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Anatomy Tattoo</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapComponent);
