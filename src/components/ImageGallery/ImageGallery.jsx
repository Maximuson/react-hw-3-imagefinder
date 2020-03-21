import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const ImageGallery = ({ isLoading, gallery = [], onImageClick }) => {
  const styleLoader = {
    margin: '0px auto',
    // gridColumnStart: '1',
    // gridColumnEnd: '3',
  };
  return (
    <>
      <ul className={styles.ImageGallery}>
        {gallery.map(item => {
          const { id, webformatURL, tags, largeImageURL } = item;
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
              onImageClick={onImageClick}
            />
          );
        })}
        {isLoading && (
          <Loader
            style={styleLoader}
            type="TailSpin"
            color="#3f51b5"
            height={100}
            width={100}
          />
        )}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
