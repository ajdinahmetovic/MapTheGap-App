import React from "react";
import "../styles/SideNav.scss";
import home from "../assets/home.svg";
import award from "../assets/award.svg";
import advertise from "../assets/advertise.svg";

import notifications from "../assets/notifications.svg";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class SideNav extends React.Component {
  state = {
    selected: 1
  };
  render() {
    return (
      <div className="SideNav">
        <div className="SideNav__item1">
          <div>
            <img className="SideNav__item1__img" src={home} />
          </div>
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 0 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.FEED")}
            </p>
          </div>
        </div>
        <div className="SideNav__item2">
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 1 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.RECENT")}
            </p>
          </div>
        </div>

        <div className="SideNav__item2">
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 2 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.TOP")}
            </p>
          </div>
        </div>

        <div className="SideNav__item2">
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 3 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.SOLVED")}
            </p>
          </div>
        </div>

        <div className="SideNav__item1">
          <div>
            <img className="SideNav__item1__img" src={award} />
          </div>
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 4 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.AWARDS")}
            </p>
          </div>
        </div>

        <div className="SideNav__item1">
          <div>
            <img className="SideNav__item1__img" src={advertise} />
          </div>
          <div>
            <p
              className={`SideNav__item1__txt1 
                ${this.state.selected === 5 ? " SideNav__txtSelected" : ""}`}
            >
              {this.context.t("APP.ADVERTISE")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
SideNav.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
