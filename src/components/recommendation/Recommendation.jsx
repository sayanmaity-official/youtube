import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Recommendation.css";
import RecommendationItem from "./RecommendationItem";

const Recommendation = () => {
  const [recommendedItems, setRecommendedItem] = useState([]);
  const { videoIds, defaultVideoId, currentVideoId } = useSelector(
    (state) => state.recommendReducer
  );

  useEffect(() => {
    const videoId = currentVideoId === "" ? defaultVideoId : currentVideoId;
    async function getMultipleResponse() {
      const filteredVideos = videoIds.filter((video) => video.id !== videoId);
      const videoIdQueryString = filteredVideos.map((video) => video.id).join();
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIdQueryString}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );

      setRecommendedItem(res.data.items);
    }
    getMultipleResponse();
  }, [defaultVideoId, currentVideoId]);

  return (
    <ul>
      {recommendedItems.map((recommended) => (
        <li key={recommended.id}>
          <RecommendationItem
            videoId={recommended.id}
            url={`https://www.youtube.com/watch?v=${recommended.id}`}
            thumbnail_url={recommended.snippet.thumbnails.default.url}
            author_name={recommended.snippet.channelTitle}
            title={recommended.snippet.title}
            viewCount={recommended.statistics.viewCount}
            publishedAt={recommended.snippet.publishedAt}
          />
        </li>
      ))}
    </ul>
  );
};

export default Recommendation;
