import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    picToggled: true,
  };

  toggleHandler = () => {
    if (this.state.picToggled === true) {
      this.setState({
        picToggled: false,
      });
    } else
      this.setState({
        picToggled: true,
      });
  };

  togglePic = () => {
    if (this.state.picToggled === true) {
      return (
        <img
          src={this.props.item.path}
          alt={this.props.item.description}
          className="gallery-items"
          onClick={this.toggleHandler}
        />
      );
    } else {
      return (
        <div onClick={this.toggleHandler}>
          <div className="gallery-description">
            {this.props.item.description}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="gallery-items-container">
        <div>{this.togglePic()}</div>
        <button onClick={() => this.props.putLikes(this.props.item)}>
          Likes {this.props.item.likes}
        </button>
      </div>
    );
  }
}

export default GalleryItem;
