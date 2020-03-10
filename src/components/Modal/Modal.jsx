import React, { createRef, Component } from 'react';
import styles from './Modal.module.css';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.overlayRef = createRef();
  }
  handleKeyUp = e => {
    if (e.code === 'Escape') {
      this.props.closeOverlay();
    }
  };
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  onClickOverlay = e => {
    const overlay = this.overlayRef.current;
    if (e.target === overlay) {
      this.props.closeOverlay();
    }
  };
  render() {
    const { modalImage } = this.props;
    return (
      <div
        onClick={this.onClickOverlay}
        ref={this.overlayRef}
        className={styles.Overlay}
      >
        <div className={styles.Modal}>
          <img src={modalImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
