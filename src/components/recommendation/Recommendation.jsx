import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./Recommendation.css";
import RecommendationItem from "./RecommendationItem";

const Recommendation = () => {
  const [recommendedItems, setRecommendedItem] = useState([]);
  const { videoIds, defaultVideoId } = useSelector(
    (state) => state.recommendReducer
  );

  useEffect(() => {
    setRecommendedItem(videoIds.filter((ele) => ele.id !== defaultVideoId));
  }, [defaultVideoId]);

  return (
    <ul>
      {recommendedItems.map((recommended) => (
        <li>
          <RecommendationItem key={recommended.id} videoId={recommended.id} />
        </li>
      ))}
    </ul>
  );
};

export default Recommendation;
