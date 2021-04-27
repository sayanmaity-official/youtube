import { SET_NEW_VIDEO } from "../action/types";

const initialState = {
  videoIds: [
    {
      id: "x71dDdmJaPk",
    },
    {
      id: "a2GujJZfXpg",
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
      id: "RE87rQkXdNw",
    },
  ],
  defaultVideoId: "x71dDdmJaPk",
};

//@todo updating defaultVideoId not happening immutably
const recommendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_VIDEO:
      state = {
        ...state,
        defaultVideoId: "" + action.payload.videoId,
      };
      return state;
    default:
      return state;
  }
};

export default recommendReducer;
