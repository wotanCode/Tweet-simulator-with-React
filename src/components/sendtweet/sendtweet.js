import React from "react";
import "./sendtweet.scss";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";

export default function SendTweet() {
  return (
    <div className="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
