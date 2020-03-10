import React from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export const ImageGallery = ({ isLoading, gallery = [], onImageClick }) => {
  const styleLoader = {
    margin: '0px auto',
    gridColumnStart: 1,
    gridColumnEnd: 3,
  };
  return (
    <>
      <ul className={styles.ImageGallery}>
        {gallery.map(item => {
          const { id, webformatURL, tags, largeImageURL } = item;
          return (
            <ImageGalleryItem
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
