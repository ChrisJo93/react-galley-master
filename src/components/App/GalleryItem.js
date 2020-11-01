import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div className="gallery-items-container">
        <img src={this.props.item.path} className="gallery-items" />
        <button onClick={() => this.props.putLikes(this.props.item)}>
          Likes {this.props.item.likes}
        </button>
      </div>
    );
  }
}

export default GalleryItem;
