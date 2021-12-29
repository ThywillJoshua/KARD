import { createAction } from "@reduxjs/toolkit";

export const GET_POPULAR_GAMES_REQUEST = createAction(
  "GET_POPULAR_GAMES_REQUEST"
);
export const GET_NEW_GAMES_REQUEST = createAction("GET_NEW_GAMES_REQUEST");

export const GET_UPCOMING_GAMES_REQUEST = createAction(
  "GET_UPCOMING_GAMES_REQUEST"
);

export const GET_SEARCH_GAMES_REQUEST = createAction("GET_SEARCH_GAME_REQUEST");
