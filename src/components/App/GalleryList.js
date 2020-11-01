import Axios from 'axios';
import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class GalleryList extends Component {
  render() {
    const gallery = this.props.gallery.map((item) => {
      return (
        <div className="gallery" key={item.id}>
          <img src={item.path} />
          {/* <div>{item.description}</div> */}
          <p> </p>
          <button onClick={item.id}>{item.likes}</button>;
        </div>
      );
    });
    return (
      <div>
        <div>{gallery}</div>
      </div>
    );
  }
}
export default GalleryList;
