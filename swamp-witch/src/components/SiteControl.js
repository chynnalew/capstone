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
      
    }
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Gallery photos={tattoos} />
        <About />
        <FAQ />
        <Location />
      </div>
    )
  }
}

export default SiteControl;