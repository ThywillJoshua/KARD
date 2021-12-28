import { createSlice } from "@reduxjs/toolkit";
import {
  GET_POPULAR_GAMES_REQUEST,
  GET_NEW_GAMES_REQUEST,
  GET_UPCOMING_GAMES_REQUEST,
} from "./gameActions";

//url endpoints
import { popularGames, upcomingGames, newGames } from "./apiUrl";

const slice = createSlice({
  name: "games",
  initialState: {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    loading: false,
    error: "",
  },
  reducers: {
    GAMES_REQUESTED: (state, action) => {
      state.loading = true;
    },

    GAMES_REQUEST_FAILED: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    GAMES_RECIEVED: (state, action) => {
      const { actionType, response } = action.payload;

      switch (actionType) {
        case GET_POPULAR_GAMES_REQUEST.type:
          state.popularGames = response.results;

          break;
        case GET_NEW_GAMES_REQUEST.type:
          state.newGames = response.results;
          break;
        case GET_UPCOMING_GAMES_REQUEST.type:
          state.upcomingGames = response.results;
          break;

        default:
          return state;
      }

      state.loading = false;
    },
  },
});

export const { GAMES_RECIEVED, GAMES_REQUESTED, GAMES_REQUEST_FAILED } =
  slice.actions;

export default slice.reducer;

//Load all games actions
export const loadPopularGames = () =>
  GET_POPULAR_GAMES_REQUEST({
    url: popularGames,
    onSuccess: GAMES_RECIEVED.type,
    onStart: GAMES_REQUESTED.type,
    onError: GAMES_REQUEST_FAILED.type,
  });

export const loadNewGames = () =>
  GET_NEW_GAMES_REQUEST({
    url: newGames,
    onSuccess: GAMES_RECIEVED.type,
    onStart: GAMES_REQUESTED.type,
    onError: GAMES_REQUEST_FAILED.type,
  });

export const loadUpcomingGames = () =>
  GET_UPCOMING_GAMES_REQUEST({
    url: upcomingGames,
    onSuccess: GAMES_RECIEVED.type,
    onStart: GAMES_REQUESTED.type,
    onError: GAMES_REQUEST_FAILED.type,
  });
