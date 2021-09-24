import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Snackbar } from "@mui/material";
//import Container from '@mui/material/Button';

import Header from "./components/header";
import SendTweet from "./components/sendtweet";


function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>
      <SendTweet setToastProps={setToastProps}/>

      <Snackbar
        anchorOrigin={{
          vertical:"top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration= {1000}
        message={<span id="message-id">{toastProps.text}</span>}
      >

      </Snackbar>
    </Container>
  );
}

export default App;
