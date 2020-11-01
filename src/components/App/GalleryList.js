import Axios from 'axios';
import React, { Component } from 'react';

class GalleryList extends Component {
  addLike() {
    Axios({
      method: 'PUT',
      url: '/like/:id',
    });
  }

  render() {
    const gallery = this.props.gallery.map((item) => {
      return (
        <div className="gallery" key={item.id}>
          <img src={item.path} />
          {/* <div>{item.description}</div> */}
          <p> </p>
          <button onClick={this.addLike}>{item.likes}</button>
        </div>
      );
    });
    return <div>{gallery}</div>;
  }
}
export default GalleryList;
