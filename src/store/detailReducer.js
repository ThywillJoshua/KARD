import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "game-detail",
  initialState: {
    description: [],
    screenshots: [],
  },
  reducers: {
    GAMES_DETAIL_RECIEVED: (state, action) => {
      state.description = [action.payload.response];
      console.log(action.payload.response);
    },

    GAMES_SCREENSHOT_RECIEVED: (state, action) => {
      state.screenshots = action.payload.response;
      console.log(action.payload.response);
    },
  },
});

export const { GAMES_DETAIL_RECIEVED, GAMES_SCREENSHOT_RECIEVED } =
  slice.actions;

export default slice.reducer;
