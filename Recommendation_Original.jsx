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

      const res = filteredVideos.map((video) => {
        return axios.get(
          `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.id}`
        );
      });

      axios
        .all([...res])
        .then(
          axios.spread((...response) => {
            var allData = new Array();
            allData.push(...response);

            setRecommendedItem(allData);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
    getMultipleResponse();
  }, [defaultVideoId, currentVideoId]);

  return (
    <ul>
      {recommendedItems.map((recommended) => (
        <li key={recommended.data.url.split("=")[1]}>
          <RecommendationItem
            videoId={recommended.data.url.split("=")[1]}
            url={recommended.data.url}
            thumbnail_url={recommended.data.thumbnail_url}
            author_name={recommended.data.author_name}
            title={recommended.data.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default Recommendation;
