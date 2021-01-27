import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

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
          className={s.overlay}
          onClick={e => {
            if (e.target === e.currentTarget) openModal();
          }}
        >
          <div className={s.modal}>
            <img
              className={s.imgModal}
              onLoad={this.loaded}
              src={src}
              alt={alt}
            />
            {this.state.isLoading && <Loader />}
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
