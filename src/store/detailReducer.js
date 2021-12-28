import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "game-detail",
  initialState: {
    description: [],
    screenshots: [],
    loading: false,
    error: "",
  },
  reducers: {
    GAMES_DETAIL_REQUESTED: (state, action) => {
      state.loading = true;
      state.description = [];
      state.screenshots = [];
    },

    GAMES_DETAIL_REQUEST_FAILED: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    GAMES_DETAIL_RECIEVED: (state, action) => {
      state.description = [action.payload.response];
      state.loading = false;
    },

    GAMES_SCREENSHOT_RECIEVED: (state, action) => {
      state.screenshots = action.payload.response;
      state.loading = false;
    },
  },
});

export const {
  GAMES_DETAIL_RECIEVED,
  GAMES_SCREENSHOT_RECIEVED,
  GAMES_DETAIL_REQUESTED,
  GAMES_DETAIL_REQUEST_FAILED,
} = slice.actions;

export default slice.reducer;
