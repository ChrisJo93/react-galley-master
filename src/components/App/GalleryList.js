import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const gallery = this.props.gallery.map((item) => {
      return (
        <div className="gallery" key={item.id}>
          <img src={item.path} />
          <div>{item.description}</div>
          <button>{item.likes}</button>
        </div>
      );
    });
    return <div>{gallery}</div>;
  }
}
export default GalleryList;
