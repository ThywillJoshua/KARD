import Axios from "axios";
import { base_url } from "../apiUrl";
import { GAMES_RECIEVED } from "../reducer";
import {
  GET_POPULAR_GAMES_REQUEST,
  GET_NEW_GAMES_REQUEST,
  GET_UPCOMING_GAMES_REQUEST,
} from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (
      (action.type !== GET_NEW_GAMES_REQUEST.type) &
      (action.type !== GET_UPCOMING_GAMES_REQUEST.type) &
      (action.type !== GET_POPULAR_GAMES_REQUEST.type)
    ) {
      return next(action);
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await Axios({ baseURL: base_url, url, method, data });
      console.log(response.data);

      dispatch(
        GAMES_RECIEVED({ actionType: action.type, response: response.data })
      );
      // dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
