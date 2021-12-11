import React from 'react';
import About from './SplashComponents/About';
import Header from './SplashComponents/Header';
import NavBar from './SplashComponents/NavBar';
import FAQ from './FAQ/FAQ';
import Location from './SplashComponents/Location';

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
        <About />
        <FAQ />
        <Location />
      </div>
    )
  }
}

export default SiteControl;