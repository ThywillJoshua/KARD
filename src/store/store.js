import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware.js/apiMiddleware";

import reducer from "./reducer";

const store = configureStore({ reducer, middleware: [api] });

export default store;
