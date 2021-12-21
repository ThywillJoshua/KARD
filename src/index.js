import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//REDUX SETUP
import store from "./store/store";
import { Provider } from "react-redux";
import {
  GET_POPULAR_GAMES_REQUEST,
  GET_NEW_GAMES_REQUEST,
  GET_UPCOMING_GAMES_REQUEST,
} from "./store/api";
import { popular_games } from "./store/apiUrl";

const unsub = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(
  GET_POPULAR_GAMES_REQUEST({
    url: popular_games,
    onSuccess: "GET_BUGS_SUCCESS",
  })
);
store.dispatch(
  GET_UPCOMING_GAMES_REQUEST({
    url: popular_games,
    onSuccess: "GET_BUGS_SUCCESS",
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
