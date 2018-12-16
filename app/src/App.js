import React, { Component } from 'react';
import './resources/styles.css';
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
        <Featured />
        <VenueNfo />
        <Highlight />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
