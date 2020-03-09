import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import pixabay from '../../api/pixabay';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Modal } from '../Modal/Modal';

class App extends Component {
  state = {
    value: '',
    gallery: [],
    isLoading: false,
    modalImage: '',
    isVisibleModal: false,
  };
  onSubmit = value => {
    this.setState(ps => {
      return {
        ...ps,
        value,
      };
    });
  };
  showImage = modalImage => {
    this.setState(() => {
      return {
        modalImage,
        isVisibleModal: true,
      };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState(() => {
        return {
          isLoading: true,
          gallery: [],
        };
      });
      pixabay.fetchImagesWithQuery(this.state.value).then(resp => {
        const imgaes = resp.map(item => {
          return {
            id: item.id,
            webformatURL: item.webformatURL,
            tags: item.tags,
            largeImageURL: item.largeImageURL,
          };
        });
        this.setState(() => {
          return {
            isLoading: false,
            gallery: imgaes,
          };
        });
      });
    }
  }

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery
          isLoading={this.state.isLoading}
          gallery={this.state.gallery}
        />
        {this.state.isVisibleModal && (
          <Modal modalImage={this.state.modalImage} />
        )}
      </div>
    );
  }
}

export default App;
