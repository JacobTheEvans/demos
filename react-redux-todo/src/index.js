import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux"
import store from "./redux";

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(<Root/>, document.getElementById("root"));
registerServiceWorker();
