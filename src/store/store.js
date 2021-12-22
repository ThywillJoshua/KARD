import { configureStore } from "@reduxjs/toolkit";
import gamesMiddleware from "./middleware.js/gamesMiddleware";
import detailMiddleware from "./middleware.js/detailMiddleware";

import reducer from "./reducer";

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesMiddleware, detailMiddleware),
});
