import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import './PopUp.scss';

const PopUp = ({ open, closeModal, innerComponent }) => (
  <Modal open={open} onClose={closeModal} classNames={{ modal: 'modal', closeButton: 'close' }} center>
    {innerComponent}
  </Modal>
);

PopUp.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  innerComponent: PropTypes.node.isRequired,
};

PopUp.defaultProps = {
  open: false,
  closeModal: () => {},
};
export default PopUp;
