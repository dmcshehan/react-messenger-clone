import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThemeProvider from "./hoc/ThemeProvider";

import "./index.css";
import App from "./App";
import Signin from "./Components/Signin";
import Username from "./Components/Username";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/username">
                <Username />
              </Route>
            </Switch>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
