import React, { Component } from 'react';
import { Modal as ModalContainer } from '../../../components';

import styles from './Modal.module.css';

type Props = {
  image: String,
  product: String,
  open: Boolean,
  onClose: () => {},
};
class Modal extends Component<Props> {
  state = {};

  render() {
    const {
      image, product, open, onClose,
    } = this.props;

    return (
      <ModalContainer open={open} onClose={onClose}>
        <div className={styles.Modal}>
          <h3 className={styles.TextModal}>{product}</h3>
          <img src={image} alt={product} className={styles.ImageModal} />
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;
