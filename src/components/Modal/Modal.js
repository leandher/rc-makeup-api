import React, { Component, Fragment, ReactElement } from 'react';

import styles from './Modal.module.css';

type Props = {
  open: Boolean,
  onClose: () => void,
  children: ReactElement,
};
class Modal extends Component<Props> {
  state = {};

  render() {
    const { open, onClose, children } = this.props;
    return (
      <Fragment>
        <div className={styles.Mask} hidden={!open} onClick={onClose} role="presentation" />
        <div className={styles.Modal_Container} hidden={!open}>
          <div className={styles.Modal_Content}>{children}</div>
          <button type="button" className={styles.CloseButton} onClick={onClose} />
        </div>
      </Fragment>
    );
  }
}

export default Modal;
