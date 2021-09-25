import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Container, Snackbar } from "@mui/material";
//import Container from '@mui/material/Button';
import ListTweets from "./components/ListTweets";

import Header from "./components/header";
import SendTweet from "./components/sendtweet";
import { TWEET_STORAGE } from "./utils/contants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEET_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header></Header>
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} />

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      ></Snackbar>
    </Container>
  );
}

export default App;
