import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { commentLoader, loadCommentCount } from "../../action/commentAction";
import { timeFormatter, ViewsFormatter } from "../../utils/util";

import "../../common.css";

const Player = () => {
  const dispatch = useDispatch();
  const { defaultVideoId, currentVideoId } = useSelector(
    (state) => state.recommendReducer
  );
  const [videoHeader, setVideoHeader] = useState({});

  useEffect(() => {
    const videoId = currentVideoId === "" ? defaultVideoId : currentVideoId;
    async function videoHeaderDesc() {
      try {
        let res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        res = res.data.items[0];
        const { snippet, statistics } = res;

        setVideoHeader({
          title: snippet.title,
          publishedAt: snippet.publishedAt,
          views: statistics.viewCount,
        });
        dispatch(loadCommentCount(statistics.commentCount));
        loadComments();
      } catch (error) {
        console.log(error);
      }
    }
    async function loadComments() {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const newArr = res.data.items.map((item) => {
          return {
            textOriginal: item.snippet.topLevelComment.snippet.textOriginal,
            authorDisplayName:
              item.snippet.topLevelComment.snippet.authorDisplayName,
            authorProfileImageUrl:
              item.snippet.topLevelComment.snippet.authorProfileImageUrl,
            publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
          };
        });

        dispatch(commentLoader(newArr));
      } catch (error) {
        console.log(error);
        dispatch(commentLoader(new Array("Comments are Disabled")));
      }
    }
    videoHeaderDesc();
  }, [currentVideoId, defaultVideoId]);

  return (
    <div
      className="border-bottom"
      style={{ borderColor: "rgba(0,0,0,0.1)" }}
      // style={{ width: "60vw" }}
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${
          currentVideoId === "" ? defaultVideoId : currentVideoId
        }?&autoplay=1&rel=0&enablejsapi=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h5
        className="yt-text-primary"
        style={{ fontSize: "1.8rem", margin: "10px 0px" }}
      >
        {" "}
        {videoHeader.title}
      </h5>
      <p
        className="yt-text-secondary"
        style={{ fontSize: "1.4rem", margin: "10px 0px" }}
      >
        {ViewsFormatter(videoHeader.views)} views•Premiered{" "}
        {timeFormatter((new Date() - new Date(videoHeader.publishedAt)) / 1000)}{" "}
        ago
      </p>
    </div>
  );
};

export default Player;
