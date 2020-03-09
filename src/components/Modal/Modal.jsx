import React from 'react';
import styles from './Modal.module.css';
export const Modal = ({ modalImage }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};
