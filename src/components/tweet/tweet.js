import React from "react";
import { Card, CardContent } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import moment from "moment";
import "./tweet.scss";

//Compoenente para cada tweet individual, es el renderizado
export default function Tweet(props) {
  const {
    tweet: { name, tweet, time },
    index,
    deleteTweet,
  } = props;
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet__header">
          <h5>{name}</h5>
          <DeleteTwoToneIcon onClick={() => console.log("Tweet Eliminado")} />
        </div>
        <p>{tweet}</p>
        <div className="tweet__date-add-tweet">
          {moment(time).format("DD/MM/YYYY HH:MM")}
        </div>
      </CardContent>
    </Card>
  );
}
