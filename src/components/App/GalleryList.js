import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class GalleryList extends Component {
  render() {
    const gallery = this.props.gallery.map((item) => {
      return (
        <GalleryItem key={item.id} item={item} putLikes={this.props.putLikes} />
      );
    });
    return <div>{gallery}</div>;
  }
}

export default GalleryList;
