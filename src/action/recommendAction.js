import { SET_NEW_VIDEO } from "./types";

export const setNewVideo = (videoId) => {
  return {
    type: SET_NEW_VIDEO,
    payload: { videoId },
  };
};
