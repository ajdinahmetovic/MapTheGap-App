import React from "react";
import "./styles/Login.scss";
import loginMega from "../_auth/assets/loginMega.svg";
import LoginForm from "../_auth/components/LoginForm";
import history from "../history";

export class Login extends React.Component {
  componentWillMount() {
    if (typeof localStorage.getItem("token") === "string") {
      history.push("/feed");
    }
  }
  render() {
    return (
      <div className="LoginView">
        <div className="LoginView__Form">
          <LoginForm />
        </div>
        <div className="LoginView__Asset">
          <img alt="img" src={loginMega} className="LoginView__Asset__img" />
        </div>
      </div>
    );
  }
}
