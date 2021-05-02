import React from "react";
import { useDispatch } from "react-redux";

import { setNewVideo } from "../../action/recommendAction";
import { ViewsFormatter, timeFormatter } from "../../utils/util";
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
          width="190"
          height="100"
          src={props.thumbnail_url}
          alt=""
          onClick={() => changeVideo(props.videoId)}
        />
      </div>
      <div className="yt-video-short-desc">
        <h5 className="yt-video-short-title">
          {props.title.substring(0, 100)}
        </h5>
        <h5 className="channel-name yt-text-secondary">{props.author_name}</h5>
        <span className="yt-text-secondary">
          {ViewsFormatter(props.viewCount)} views &middot;{" "}
          {timeFormatter((new Date() - new Date(props.publishedAt)) / 1000)} ago
        </span>
      </div>
    </div>
  );
};

export default RecommendationItem;
