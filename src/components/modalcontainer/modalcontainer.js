import React from "react";
import "./modalcontainer.scss";
import { Modal } from "@mui/material";

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;

  //Modal
  return (
    <Modal
      className="modal-container"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}