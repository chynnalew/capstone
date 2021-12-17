import React from "react";
import About from "./SplashComponents/About";
import Header from "./SplashComponents/Header";
import NavBar from "./SplashComponents/NavBar";
import FAQ from "./FAQ/FAQ";
import Location from "./SplashComponents/Location";
import { tattoos } from "./Galleries/Tattoos";
import Gallery from "./Galleries/Gallery";
import Lightbox from "./Galleries/Lightbox";
import { flash } from "./Galleries/Flash";
import { pets } from "./Galleries/Pets";
import NavBar2 from './SplashComponents/NavBar2';
import { BrowserRouter as Router } from 'react-router-dom';

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
      currentImage: [],
    };
  }

  handleTattoosGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handleFlashGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: false,
      flashGalleryVisible: true,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handlePetGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: true,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handleGalleryImageClick = (index) => {
    const image = tattoos[index];
    this.setState({
      currentImage: [{ ...image }],
      lightboxVisible: true,
    });
  };

  handleCloseClick = () => {
    this.setState({
      currentImage: [],
      lightboxVisible: false,
    });
  };

  render() {
    let album;
    
    if (this.state.tattooGalleryVisible) {
      album = tattoos
    } else if (this.state.flashGalleryVisible) {
      album = flash
    } else if (this.state.petGalleryVisible) {
      album = pets
    } 
    
    let currentlyVisibleState = 
      <Router>
        <NavBar2
        onTattoosGalleryClick={this.handleTattoosGalleryClick}
        onFlashGalleryClick={this.handleFlashGalleryClick}
        onPetGalleryClick={this.handlePetGalleryClick}/>
        <Header />
        {/* <NavBar
          onTattoosGalleryClick={this.handleTattoosGalleryClick}
          onFlashGalleryClick={this.handleFlashGalleryClick}
          onPetGalleryClick={this.handlePetGalleryClick}
        /> */}
        <About />
        <FAQ />
        <Gallery onGalleryImageClick={this.handleGalleryImageClick}
          photos={album} />
        <Location />
      </Router>

    if (this.state.lightboxVisible) {
      currentlyVisibleState = (
        <React.Fragment>
        <Header />
        <NavBar
          state={this.state}
          onMainComponentsClick={this.handleMainComponentsClick}
          onTattoosGalleryClick={this.handleTattoosGalleryClick}
          onFlashGalleryClick={this.handleFlashGalleryClick}
          onPetGalleryClick={this.handlePetGalleryClick}
          onContactClick={this.handleContactClick}
        />
        <About />
        <FAQ />
        <Gallery onGalleryImageClick={this.handleGalleryImageClick}
          photos={album} />
        <Lightbox image={this.state.currentImage[0]} />
        <Location />
      </React.Fragment>
      );
    }
    return (
      <div>
        {currentlyVisibleState}
      </div>
    );
  }
}

export default SiteControl;
