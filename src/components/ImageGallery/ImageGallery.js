import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button/Button';

export default function ImageGallery({ gallery, openModal, loadMore }) {
  return (
    <>
      <ul className="gallery">
        {gallery.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
        <Button loadMore={loadMore} />
      </ul>
    </>
  );
}
