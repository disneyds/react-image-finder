import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Modal extends Component {
  state = {
    isLoading: true,
  };

  loaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { src, alt, openModal } = this.props;
    return (
      <>
        <div
          className="Overlay"
          onClick={e => {
            if (e.target === e.currentTarget) openModal();
          }}
        >
          <div className="Modal">
            <img
              className="imgModal"
              onLoad={this.loaded}
              src={src}
              alt={alt}
            />
            {this.state.isLoading && (
              <Loader
                className="wrapper"
                type="ThreeDots"
                color="#ffc107"
                height={120}
                width={120}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
