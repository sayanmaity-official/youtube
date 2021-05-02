import { SET_NEW_VIDEO } from "../action/types";

const initialState = {
  videoIds: [
    {
      id: "x71dDdmJaPk",
    },
    {
      id: "ApXoWvfEYVU",
    },
    {
      id: "ItFqjjLPjcA",
    },
    {
      id: "axbUCR1nKRA",
    },
    {
      id: "X2DUpDxFJyg",
    },
    {
      id: "UtF6Jej8yb4",
    },
  ],
  defaultVideoId: "x71dDdmJaPk",
  currentVideoId: "",
};

const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_VIDEO:
      state = {
        ...state,
        currentVideoId: "" + action.payload.videoId,
      };
      return state;
    default:
      return state;
  }
};

export default recommendReducer;
