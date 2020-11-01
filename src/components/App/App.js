import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>

        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
