import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  onImageClick,
}) => {
  const handleClickImage = () => {
    onImageClick(largeImageURL);
  };
  return (
    <li className={styles.ImageGalleryItem} onClick={handleClickImage}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
