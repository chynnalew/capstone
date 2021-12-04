import React from 'react';
import About from './About';
import Header from './Header';
import NavBar from './NavBar';

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
      </div>
    )
  }
}

export default SiteControl;