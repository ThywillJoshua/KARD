import { createSlice } from "@reduxjs/toolkit";
import {
  GET_POPULAR_GAMES_REQUEST,
  GET_NEW_GAMES_REQUEST,
  GET_UPCOMING_GAMES_REQUEST,
} from "./api";

const slice = createSlice({
  name: "popular-games",
  initialState: {
    popular: [],
    newGames: [],
    upcoming: [],
  },
  reducers: {
    GAMES_RECIEVED: (state, action) => {
      const { actionType, response } = action.payload;

      switch (actionType) {
        case GET_POPULAR_GAMES_REQUEST.type:
          response.results.forEach((action) => state.popular.push(action));
          break;
        case GET_NEW_GAMES_REQUEST.type:
          response.results.forEach((action) => state.newGames.push(action));
          break;
        case GET_UPCOMING_GAMES_REQUEST.type:
          response.results.forEach((action) => state.upcoming.push(action));
          break;

        default:
          break;
      }
    },
  },
});

export const { GAMES_RECIEVED } = slice.actions;

export default slice.reducer;
