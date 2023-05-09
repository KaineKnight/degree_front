import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Box, Modal } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions';

import styles from './ModalBox.module.css';

function ModalBox({ children }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);

  const handleClose = () => dispatch(toggleModal());
  return (
    <Modal open={isOpen} onClose={handleClose} className={styles.modal}>
      <Box
        className={styles.modalBox}
        bgcolor="background.default"
        color="text.primary"
      >
        {children}
      </Box>
    </Modal>
  );
}

ModalBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ModalBox);
