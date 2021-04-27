import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const videoId = useSelector((state) => state.recommendReducer.defaultVideoId);
  return (
    <div className="border-bottom" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
      <iframe
        title="ytplayer"
        id="ytplayer"
        type="text/html"
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
      ></iframe>
      <h5 style={{ color: "#030303" }}>
        WILD - "It Only Gets Better" [Official Lyric Video]e
      </h5>
      <p style={{ color: "#606060", fontSize: "1.1rem" }}>
        63,875 views•Premiered on 17 May 2019
      </p>
    </div>
  );
};

export default Player;
