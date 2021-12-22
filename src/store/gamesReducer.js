import { createSlice } from "@reduxjs/toolkit";
import {
  GET_POPULAR_GAMES_REQUEST,
  GET_NEW_GAMES_REQUEST,
  GET_UPCOMING_GAMES_REQUEST,
} from "./api";

//url endpoints
import { popularGames, upcomingGames, newGames } from "./apiUrl";

const slice = createSlice({
  name: "games",
  initialState: {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
  },
  reducers: {
    GAMES_RECIEVED: (state, action) => {
      const { actionType, response } = action.payload;

      switch (actionType) {
        case GET_POPULAR_GAMES_REQUEST.type:
          response.results.forEach((action) => state.popularGames.push(action));
          break;
        case GET_NEW_GAMES_REQUEST.type:
          response.results.forEach((action) => state.newGames.push(action));
          break;
        case GET_UPCOMING_GAMES_REQUEST.type:
          response.results.forEach((action) =>
            state.upcomingGames.push(action)
          );
          break;

        default:
          break;
      }
    },
  },
});

export const { GAMES_RECIEVED } = slice.actions;

export default slice.reducer;

//Load all games actions
export const loadPopularGames = () =>
  GET_POPULAR_GAMES_REQUEST({
    url: popularGames,
    onSuccess: GAMES_RECIEVED.type,
  });

export const loadNewGames = () =>
  GET_NEW_GAMES_REQUEST({
    url: newGames,
    onSuccess: GAMES_RECIEVED.type,
  });

export const loadUpcomingGames = () =>
  GET_UPCOMING_GAMES_REQUEST({
    url: upcomingGames,
    onSuccess: GAMES_RECIEVED.type,
  });
