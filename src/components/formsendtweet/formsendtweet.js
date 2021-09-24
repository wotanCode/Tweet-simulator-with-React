import React from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";
import "./formsendtweet.scss";

//Este es el formulario donde se crea el tweet
export default function FormSendTweet(props) {
  //Recuperamos por props la funciona enviada en formsendtweet
  const { sendTweet } = props;

  const {} = props;
  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__tittle">Enviar tweet</h2>
      <form className="form-send-tweet__form" onSubmit={event => sendTweet(event)}>
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              margin="normal"
              placeholder="Nombre del usuario"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              multiline
              name="tweet"
              rows="6"
              placeholder="Escribe tu tweet..."
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <Button type="submit">Escribe tu tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
