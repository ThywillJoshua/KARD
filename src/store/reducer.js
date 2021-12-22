import { combineReducers } from "@reduxjs/toolkit";

import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});
