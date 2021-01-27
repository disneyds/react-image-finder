import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

export default function ImageGalleryItem({
  image: {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  },
  openModal,
}) {
  return (
    <li
      className={s.galleryItem}
      data-large-image={largeImageURL}
      onClick={() => {
        openModal(largeImageURL, tags);
      }}
    >
      <div className={s.photoCard}>
        <div className="image-wrapper">
          <img className={s.photoCardImg} src={webformatURL} alt={tags} />
        </div>

        <div className={s.stats}>
          <p className={s.statsItem}>
            <i className={`material-icons ${s.materialIcons}`}>thumb_up</i>
            <span>{likes}</span>
          </p>
          <p className={s.statsItem}>
            <i className={`material-icons ${s.materialIcons}`}>visibility</i>
            <span>{views}</span>
          </p>
          <p className={s.statsItem}>
            <i className={`material-icons ${s.materialIcons}`}>comment</i>
            <span>{comments}</span>
          </p>
          <p className={s.statsItem}>
            <i className={`material-icons ${s.materialIcons}`}>
              cloud_download
            </i>
            <span>{downloads}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  likes: PropTypes.number,
  views: PropTypes.number,
  comments: PropTypes.number,
  downloads: PropTypes.number,
};
