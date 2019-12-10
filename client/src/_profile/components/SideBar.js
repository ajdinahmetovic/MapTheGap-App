import React from "react";
import "../styles/SideBar.scss";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class SideBar extends React.Component {
  render() {
    return (
      <div className="SideBar">
        <img
          alt="Avatar"
          className="SideBar__profileImg"
          src="https://api.adorable.io/avatars/285/ajdin.png"
        />
        <p className="SideBar__name">Ajdin Ahmetovic</p>
        <p className="SideBar__role">Youth</p>

        <div className="SideBar__item">
          <p className="SideBar__item__txt">{this.context.t("APP.PROFILE")}</p>
        </div>
        <div className="SideBar__line" />

        <div className="SideBar__item">
          <p className="SideBar__item__txt">
            {this.context.t("APP.POSTED_PROBLEMS")}
          </p>
        </div>
        <div className="SideBar__line" />

        <div className="SideBar__item">
          <p className="SideBar__item__txt">
            {this.context.t("APP.SOLVED_PROBLEMS")}
          </p>
        </div>
        <div className="SideBar__line" />

        <div className="SideBar__item">
          <p className="SideBar__item__txt">{this.context.t("APP.AWARDS")}</p>
        </div>
        <div className="SideBar__line" />
        <div className="SideBar__item">
          <p className="SideBar__item__txt">
            {this.context.t("APP.DELETE_ACCOUNT")}
          </p>
        </div>
      </div>
    );
  }
}
SideBar.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
