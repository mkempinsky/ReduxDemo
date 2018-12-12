import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import postReducer from "./reducers/postReducer";
import "./styles.css";

const store = createStore(postReducer);
ReactDOM.render(
  <Provider store={store}>
    <App className="App" />
  </Provider>,
  document.getElementById("root")
);
