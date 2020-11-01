import Axios from 'axios';
import React, { Component } from 'react';

class GalleryList extends Component {
  addLike = (event) => {
    Axios({
      method: 'PUT',
      url: `gallery/like/${event.id}`,
    })
      .then((response) => {
        console.log('fuck it');
        // this.getGallery();
      })
      .catch((err) => {
        console.log(err);
        alert('SOmething wrong in put');
      });
  };

  render() {
    const gallery = this.props.gallery.map((item) => {
      return (
        <div className="gallery" key={item.id}>
          <img src={item.path} />
          {/* <div>{item.description}</div> */}
          <p> </p>
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.addLike(item.id)}>{item.likes}</button>
        <div>{gallery}</div>
      </div>
    );
  }
}
export default GalleryList;
