import React from "react";
import { useDispatch } from "react-redux";

import { setNewVideo } from "../../action/recommendAction";
import "./RecommendationItem.css";

const RecommendationItem = (props) => {
  const dispatch = useDispatch();
  const changeVideo = (videoId) => {
    dispatch(setNewVideo(videoId));
  };
  return (
    <div className="recommendation-container">
      <div className="yt-video-thumbnail">
        <img
          src="https://picsum.photos/200/100"
          alt=""
          onClick={() => changeVideo(props.videoId)}
        />
      </div>
      <div className="yt-video-short-desc">
        <h5 className="yt-video-short-title">
          WILD - Here We Go (Official Lyric Video)
        </h5>
        <h5 className="channel-name yt-text-secondary">Wild</h5>
        <span className="yt-text-secondary">
          248k views &middot; 5 years ago
        </span>
      </div>
    </div>
  );
};

export default RecommendationItem;
