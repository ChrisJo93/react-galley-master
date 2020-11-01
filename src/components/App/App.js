import React, { Component } from 'react';
import galleryItems from '../../../server/modules/gallery.data';
import './App.css';
// import GalleryList from './GalleryList';

console.log(galleryItems);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        {/* <GalleryList />
        <GalleryItem /> */}
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
