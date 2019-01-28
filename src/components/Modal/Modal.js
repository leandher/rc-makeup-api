// chamada
<SimpleModalLauncher buttonLabel="Open image modal">
<div className={classes.imageModal}>
  <img
    className={classes.imageInModal}
    src="https://placeimg.com/800/450/nature"
    alt="Nature"
  />
</div>
</SimpleModalLauncher>

//Launcher

import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import styles from "./SimpleModalLauncherStyles";
import SimpleModal from "../SimpleModal/SimpleModal";

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { buttonLabel, children, classes } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button
          type="button"
          className={classes.modalButton}
          onClick={() => this.handleToggleModal()}
        >
          {buttonLabel}
        </button>

        {showModal && (
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            {children}
          </SimpleModal>
        )}
      </div>
    );
  }
}

SimpleModalLauncher.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default injectSheet(styles)(SimpleModalLauncher);

// Launcher style

export default {
    modalButton: {
      padding: ['0.7rem', '1.8rem'],
      backgroundColor: '#568db2',
      border: 0,
      borderRadius: '0.3rem',
      fontSize: '1rem',
      color: '#fff',
      cursor: 'pointer',
      marginBottom: '0.8rem',
  
      '&:hover': {
        backgroundColor: '#466d87',
      },
    },
  };

  
//Modal

import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import isNil from "lodash/fp/isNil";
import styles from "./SimpleModalStyles";

class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener("keyup", this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { onCloseRequest, children, classes } = this.props;

    return (
      <div className={classes.modalOverlay}>
        <div className={classes.modal} ref={node => (this.modal = node)}>
          <div className={classes.modalContent}>{children}</div>
        </div>

        <button
          type="button"
          className={classes.closeButton}
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

SimpleModal.propTypes = {
  onCloseRequest: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default injectSheet(styles)(SimpleModal);

// Modal style

export default {
    // Prevent page scrolling when modal is open
    '@global': {
      'body': {
        overflow: 'hidden',
      },
    },
  
    // Modal wrapper
    modalOverlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      padding: '1rem',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '9999',
      opacity: 1,
      animation: 'show .5s ease',
      overflowX: 'hidden',
      overflowY: 'auto',
    },
  
    // Fade in open animation
    '@keyframes show': {
      '0%': {
        display: 'none',
        opacity: 0,
      },
      '1%': {
        display: 'flex',
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  
    // Modal itself
    modal: {
      width: '100%',
      backgroundColor: '#fff',
      boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
  
      '@media (min-width: 576px)': {
        width: '32rem',
      },
    },
  
    // Close button
    closeButton: {
      position: 'fixed',
      top: 0,
      right: 0,
      background: '#fff',
      width: '2.5rem',
      height: '2.5rem',
      padding: 0,
      border: 0,
      cursor: 'pointer',
      outline: 0,
      boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
  
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '1.2rem',
        left: '0.25rem',
        width: '2rem',
        height: '0.1rem',
        backgroundColor: '#888',
      },
  
      '&:before': {
        transform: 'rotate(45deg)',
      },
  
      '&:after': {
        transform: 'rotate(-45deg)',
      },
  
      '&:hover:before, &:hover:after': {
        backgroundColor: '#444',
      },
    },
  };
  