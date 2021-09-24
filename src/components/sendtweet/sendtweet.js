import React, { useState } from "react";
import "./sendtweet.scss";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import FormSendTweet from "../formsendtweet";

import ModalContainer from "../modalcontainer";

export default function SendTweet() {
  //Boton inferior para abrir el Modal para crear tweet
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  //enviar el formulario
  const sendTweet = (event, formValue) => {
    event.preventDefault();
    console.log("Enviando tweet");
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      //Abrimos modal
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        //llamamos al form dentro del modal y enviamos sendTweet
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
