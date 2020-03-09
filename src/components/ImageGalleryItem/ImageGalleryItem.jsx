import React from 'react';
import styles from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
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
        key={id}
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};
