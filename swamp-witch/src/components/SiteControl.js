import React from 'react';
import About from './About';
import Header from './Header';
import NavBar from './NavBar';
import FAQ from './FAQ';
import Location from './Location';

class SiteControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Location />
        <Header />
        <NavBar />
        <About />
        <FAQ />
        
      </div>
    )
  }
}

export default SiteControl;