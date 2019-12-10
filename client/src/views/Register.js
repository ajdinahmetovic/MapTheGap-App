import React from "react";
import "./styles/Register.scss";
import registerImg from "../_auth/assets/register_illus.svg";
import { PropTypes } from "prop-types";
import NGO from "../_auth/components/RegisterForms/NGO";
import Youth from "../_auth/components/RegisterForms/Youth";
import history from "../history";

export class Register extends React.Component {
  componentWillMount() {
    if (typeof localStorage.getItem("token") === "string") {
      history.push("/feed");
    }
  }
  render() {
    return (
      <div className="RegisterView">
        <div className="RegisterView__anim">
          <img alt="" className="RegisterView__anim__img" src={registerImg} />
        </div>
        <div className="RegisterView__content">
          <div className="RegisterView__heading">
            <p className="RegisterView__heading__txt1">
              {this.context.t("APP.REGISTER.HELLO")}
            </p>
            <h3 className="RegisterView__heading__txt2">
              {this.context.t("APP.REGISTER.WELCOME_NETWORK")}
            </h3>
            <p className="RegisterView__heading__txt3">
              {this.context.t("APP.REGISTER_MSG_YOUTH")}
            </p>
            <Youth />
          </div>
        </div>
      </div>
    );
  }
}

Register.contextTypes = {
  t: PropTypes.func
};
