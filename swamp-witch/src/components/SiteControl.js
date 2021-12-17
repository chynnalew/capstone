import React from 'react';
import About from './SplashComponents/About';
import Header from './SplashComponents/Header';
import NavBar from './SplashComponents/NavBar';
import FAQ from './FAQ/FAQ';
import Location from './SplashComponents/Location';
import { tattoos } from './Galleries/Tattoos';
import Gallery from './Galleries/Gallery';

class SiteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: false,
      lightboxVisible: false,
      currentImage: [],
    }
  }

  handleGalleryClick = (index) => {
    const image = tattoos[index];
    this.setState({
      currentImage: [{ ...image }],
      lightboxVisible: !this.state.lightboxVisible
    })
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Gallery onGalleryClick={this.handleGalleryClick} photos={tattoos} />
        <About />
        <FAQ />
        <Location />
      </div>
    )
  }
}

export default SiteControl;