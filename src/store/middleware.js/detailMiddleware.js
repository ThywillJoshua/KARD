import {
  GAMES_DETAIL_RECIEVED,
  GAMES_SCREENSHOT_RECIEVED,
} from "../detailReducer";
import {
  GET_GAMES_DETAIL_REQUEST,
  GET_GAMES_SCREENSHOT_REQUEST,
} from "../detailAction";

import Axios from "axios";
import { base_url } from "../apiUrl";

const detailMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (
      action.type !== GET_GAMES_DETAIL_REQUEST.type &&
      action.type !== GET_GAMES_SCREENSHOT_REQUEST.type
    )
      return next(action);

    const { url, method, data } = action.payload;

    try {
      const response = await Axios({ baseURL: base_url, url, method, data });

      if (response.data.results) {
        return dispatch(GAMES_SCREENSHOT_RECIEVED({ response: response.data }));
      }

      dispatch(GAMES_DETAIL_RECIEVED({ response: response.data }));
    } catch (error) {
      console.log(error.message);
    }
  };

export default detailMiddleware;
