import React from 'react';

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
      className="gallery-item"
      data-large-image={largeImageURL}
      onClick={() => {
        openModal(largeImageURL, tags);
      }}
    >
      <div className="photo-card">
        <div className="image-wrapper">
          <img className="photo-card__img" src={webformatURL} alt={tags} />
        </div>

        <div className="stats">
          <p className="stats-item">
            <i className="material-icons">thumb_up</i>
            <span>{likes}</span>
          </p>
          <p className="stats-item">
            <i className="material-icons">visibility</i>
            <span>{views}</span>
          </p>
          <p className="stats-item">
            <i className="material-icons">comment</i>
            <span>{comments}</span>
          </p>
          <p className="stats-item">
            <i className="material-icons">cloud_download</i>
            <span>{downloads}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
