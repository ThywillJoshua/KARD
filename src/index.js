import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//REDUX SETUP
import store from "./store/store";
import { Provider } from "react-redux";

//REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
