import React from "react";
import "./App.css";
import { Landing } from "./views/Landing";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

import { Provider } from "react-redux";
import store from "./store";
import I18n from "redux-i18n";
import { translations } from "./config/translations";

import { Router, Route } from "react-router-dom";
import history from "./history";
import initializeAxios from "./config/axios-config";
import { Feed } from "./views/Feed";

class App extends React.Component {
  componentDidMount() {
    initializeAxios();
  }
  render() {
    return (
      <Provider store={store}>
        <I18n translations={translations} initialLang={"en"} fallbackLang="en">
          <Router history={history}>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/feed" component={Feed} />
          </Router>
        </I18n>
      </Provider>
    );
  }
}

export default App;
