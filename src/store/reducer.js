import { combineReducers } from "@reduxjs/toolkit";

import gamesReducer from "./gamesReducer";

export default combineReducers({
  games: gamesReducer,
});
