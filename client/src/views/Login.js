import React from "react";
import "./styles/Login.scss";
import "../_auth/styles/LoginForm.scss";
import loginMega from "../_auth/assets/loginMega.svg";
import LoginForm from "../_auth/components/LoginForm";
import history from "../history";
import logo from "../_landing/assets/logo.svg";
import { BrowserView, MobileView } from "react-device-detect";

export class Login extends React.Component {
  componentWillMount() {
    if (typeof localStorage.getItem("token") === "string") {
      history.push("/feed");
    }
  }
  render() {
    return (
      <div>
        <BrowserView>
          <div className="LoginView">
            <div className="LoginView__Form">
              <div className="LoginView__box">
                <div className="LoginForm__message">
                  <p className="LoginForm__message__txt1">Hello</p>
                  <h3 className="LoginForm__message__txt2">Welcome back</h3>
                </div>
                <div className="distance"></div>
                <LoginForm />
              </div>
            </div>
            <div className="LoginView__Asset">
              <img
                alt="img"
                src={loginMega}
                className="LoginView__Asset__img"
              />
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="LoginView_mobile">
            <img alt="logo" className="LoginView_mobile__logo" src={logo} />
            <div className="LoginView_mobile__form">
              <div className="LoginView_mobile__box">
                <div className="LoginForm__message_mobile">
                  <p className="LoginForm__message_mobile__txt1">Hello</p>
                  <h3 className="LoginForm__message_mobile__txt2">
                    Welcome back
                  </h3>
                </div>
              </div>

              <LoginForm />
            </div>
          </div>
        </MobileView>
      </div>
    );
  }
}
