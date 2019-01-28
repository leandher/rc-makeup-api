import React, { Component, Fragment, ReactElement } from 'react';

import './Modal.css';

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
        <div className="Mask" hidden={!open} onClick={onClose} role="presentation" />
        <div className="Modal-Container" hidden={!open}>
          <div className="Modal-Content">{children}</div>
          <button type="button" className="CloseButton" onClick={onClose} />
        </div>
      </Fragment>
    );
  }
}

export default Modal;
