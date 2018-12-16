import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueNfo from './components/venueNFO/index';
import Highlight from './components/highlights/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueNfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
