import React from 'react';
import About from './About';
import Header from './Header';
import NavBar from './NavBar';
import FAQ from './FAQ';
import Location from './MapComponent';

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