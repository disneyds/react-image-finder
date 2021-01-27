import React from 'react';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button/Button';

export default function ImageGallery({ gallery, openModal, loadMore }) {
  return (
    <>
      <ul className={s.gallery}>
        {gallery.map(image => (
          <ImageGalleryItem
            key={image.webformatURL}
            image={image}
            openModal={openModal}
          />
        ))}
        <Button loadMore={loadMore} />
      </ul>
    </>
  );
}

ImageGallery.protoType = {
  gallery: PropTypes.arrayOf(PropTypes.shape).isRequired,
  openModal: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};
