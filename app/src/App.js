import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNFO/index';
import Highlight from './components/highlights/index';
import Pricing from './components/pricing';
import Location from './components/location/index';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="Features">
          <Featured />
        </Element>

        <Element name="VenueNFO">
          <VenueNfo />
        </Element>

        <Element name="highlights">
          <Highlight />
        </Element>
        
        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
        
      </div>
    );
  }
}

export default App;
