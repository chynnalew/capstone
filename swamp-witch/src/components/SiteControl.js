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

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPageVisible: true,
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
      currentImage: [],
    };
  }

  handleMainComponentsClick = () => {
    this.setState({
      mainPageVisible: true,
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handleTattoosGalleryClick = () => {
    this.setState({
      mainPageVisible: false,
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handleFlashGalleryClick = () => {
    this.setState({
      mainPageVisible: false,
      tattooGalleryVisible: false,
      flashGalleryVisible: true,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handlePetGalleryClick = () => {
    this.setState({
      mainPageVisible: false,
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: true,
      lightboxVisible: false,
      contactVisible: false,
    });
  };

  handleContactClick = () => {
    this.setState({
      mainPageVisible: false,
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: true,
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
    let currentlyVisibleState;
    if (this.state.mainPageVisible) {
      currentlyVisibleState = (
        <React.Fragment>
          <About />
          <FAQ />
          <Location />
        </React.Fragment>
      );
    } else if (this.state.tattooGalleryVisible) {
      currentlyVisibleState = (
        <Gallery
          onGalleryImageClick={this.handleGalleryImageClick}
          photos={tattoos}
        />
      );
    } else if (this.state.flashGalleryVisible) {
      currentlyVisibleState = (
        <Gallery
          onGalleryImageClick={this.handleGalleryImageClick}
          photos={flash}
        />
      );
    } else if (this.state.petGalleryVisible) {
      currentlyVisibleState = (
        <Gallery
          onGalleryImageClick={this.handleGalleryImageClick}
          photos={pets}
        />
      );
    } else if (this.state.lightboxVisible && this.state.tattooGalleryVisible) {
      currentlyVisibleState = (
        <React.Fragment>
          <Gallery
            onGalleryImageClick={this.handleGalleryImageClick}
            photos={tattoos}
          />
          <Lightbox image={this.state.currentImage[0]} />
        </React.Fragment>
      );
    } else if (this.state.lightboxVisible && this.state.flashGalleryVisible) {
      currentlyVisibleState = (
        <React.Fragment>
          <Gallery
            onGalleryImageClick={this.handleGalleryImageClick}
            photos={flash}
          />
          <Lightbox image={this.state.currentImage[0]} />
        </React.Fragment>
      );
    } else if (this.state.lightboxVisible && this.state.petGalleryVisible) {
      currentlyVisibleState = (
        <React.Fragment>
          <Gallery
            onGalleryImageClick={this.handleGalleryImageClick}
            photos={pets}
          />
          <Lightbox image={this.state.currentImage[0]} />
        </React.Fragment>
      );
    }
    // else if (this.state.contactVisible) {
    //   currentlyVisibleState = <Contact />;
    // }
    return (
      <div>
        <Header />
        <NavBar
          onMainComponentsClick={this.handleMainComponentsClick}
          onTattoosGalleryClick={this.handleTattoosGalleryClick}
          onFlashGalleryClick={this.handleFlashGalleryClick}
          onPetGalleryClick={this.handlePetGalleryClick}
          onContactClick={this.handleContactClick}
        />
        {currentlyVisibleState}
      </div>
    );
  }
}

export default SiteControl;
