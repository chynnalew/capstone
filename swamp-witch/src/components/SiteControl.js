import React from "react";
import About from "./HomeComponents/About";
import Header from "./HomeComponents/Header";
import FAQ from "./FAQ/FAQ";
import Location from "./HomeComponents/Location";
import { tattoos } from "./Galleries/Tattoos";
import Gallery from "./Galleries/Gallery";
import Lightbox from "./Galleries/Lightbox";
import { flash } from "./Galleries/Flash";
import { pets } from "./Galleries/Pets";
import NavBar from './HomeComponents/NavBar/NavBar';
import SideBar from './HomeComponents/NavBar/SideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      lightboxVisible: false,
      contactVisible: false,
      sidebarOpen: false,
      currentImage: [],
    };
  }

  handleSideBarClick = () => {
    this.setState({sidebarOpen: true})
  }

  handleSideBarClose = () => {
    this.setState({ sidebarOpen: false})
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
    let navComponent;
    
    if (this.state.tattooGalleryVisible) {
      album = tattoos
    } else if (this.state.flashGalleryVisible) {
      album = flash
    } else if (this.state.petGalleryVisible) {
      album = pets
    } 
    if (!this.state.sidebarOpen) {
      navComponent = <NavBar onSideBarClick={this.handleSideBarClick}/>
    }
    if (this.state.sidebarOpen) {
      navComponent = <SideBar onSideBarClose={this.handleSideBarClose}/>
    }
    
    let currentlyVisibleState = 
      <Router>
        {navComponent}
        <Routes>
          <Route path='/' exact element={
            <React.Fragment>
              <Header />
              <About />
              <FAQ />
              <Location />
            </React.Fragment>
          }/>
          <Route path='/gallery' exact element={<Gallery onGalleryImageClick={this.handleGalleryImageClick}
            photos={album} />}/>
        </Routes>
      </Router>
    return (
      <div>
        {currentlyVisibleState}
      </div>
    );
  }
}

export default SiteControl;
