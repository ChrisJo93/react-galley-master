import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from './GalleryList';

class App extends Component {
  state = {
    galleryList: [],
    errorMsg: null,
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    Axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response.data);
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

  putLikes = (event) => {
    Axios({
      method: 'PUT',
      url: `gallery/like/${event.id}`,
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.log(err);
        alert('Something wrong in put');
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList
          gallery={this.state.galleryList}
          putLikes={this.putLikes}
        />
      </div>
    );
  }
}

export default App;
