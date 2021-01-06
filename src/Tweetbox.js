import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "sumit singh",
      username: "sks",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="" alt="sks" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox_button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
