import React from 'react';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export const ImageGallery = ({ isLoading, gallery = [] }) => {
  return (
    <>
      {isLoading && (
        <Loader
          style={{
            margin: '0 auto',
          }}
          type="TailSpin"
          color="#3f51b5"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <ul className={styles.ImageGallery}>
        {gallery.map(item => {
          const { id, webformatURL, tags, largeImageURL } = item;
          return (
            <ImageGalleryItem
              id={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
            />
          );
        })}
      </ul>
    </>
  );
};
