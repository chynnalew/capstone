import React from "react";
import About from "./HomeComponents/About";
import Header from "./HomeComponents/Header";
import FAQ from "./FAQ/FAQ";
import Location from "./HomeComponents/Location";
import { tattoos } from "./Galleries/Tattoos";
import Gallery from "./Galleries/Gallery";
import Contact from "./Contact";
import Policies from "./Policies";
import { flash } from "./Galleries/Flash";
import { pets } from "./Galleries/Pets";
import NavBar from "./HomeComponents/NavBar/NavBar";
import SideBar from "./HomeComponents/NavBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class SiteControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
      sidebarOpen: false,
    };
  }

  handleSideBarClick = () => {
    this.setState({ sidebarOpen: true });
  };

  handleSideBarClose = () => {
    this.setState({ sidebarOpen: false });
  };

  handleTattoosGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: true,
      flashGalleryVisible: false,
      petGalleryVisible: false,
    });
  };

  handleFlashGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: false,
      flashGalleryVisible: true,
      petGalleryVisible: false,
    });
  };

  handlePetGalleryClick = () => {
    this.setState({
      tattooGalleryVisible: false,
      flashGalleryVisible: false,
      petGalleryVisible: true,
    });
  };

  render() {
    let album;
    let navComponent;

    if (this.state.tattooGalleryVisible) {
      album = tattoos;
    } else if (this.state.flashGalleryVisible) {
      album = flash;
    } else if (this.state.petGalleryVisible) {
      album = pets;
    }
    if (!this.state.sidebarOpen) {
      navComponent = (
        <NavBar
          onTattooClick={this.handleTattoosGalleryClick}
          onFlashClick={this.handleFlashGalleryClick}
          onPetClick={this.handlePetGalleryClick}
          onSideBarClick={this.handleSideBarClick}
        />
      );
    }
    if (this.state.sidebarOpen) {
      navComponent = (
        <SideBar
          onTattooClick={this.handleTattoosGalleryClick}
          onFlashClick={this.handleFlashGalleryClick}
          onPetClick={this.handlePetGalleryClick}
          onSideBarClose={this.handleSideBarClose}
        />
      );
    }
    return (
      <div>
        <Router basename="capstone">
          {navComponent}
          <Routes>
            <Route
              path="/"
              exact
              element={
                <React.Fragment>
                  <Header />
                  <About />
                  <FAQ />
                  <Location />
                </React.Fragment>
              }
            />

            <Route
              path="/gallery"
              exact
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <Gallery
                    onGalleryImageClick={this.handleGalleryImageClick}
                    photos={album}
                  />
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <Contact />
                </div>
              }
            />
            <Route
              path="/policies"
              element={
                <div style={{ animation: "fadeIn 1s" }}>
                  <Policies />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default SiteControl;
