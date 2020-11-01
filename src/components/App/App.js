import Axios from 'axios';
import React, { Component } from 'react';
// import galleryItems from '../../../server/modules/gallery.data';
import './App.css';
// import GalleryList from './GalleryList';

class App extends Component {
  state = {
    galleryList: [],
    errorMsg: null,
  };

  getGallery() {
    Axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response);
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'lol',
        });
      });
  }

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
