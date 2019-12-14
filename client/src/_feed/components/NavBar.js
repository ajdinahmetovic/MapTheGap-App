import React from "react";
import "../styles/NavBar.scss";
import navLogo from "../assets/navlogo.svg";
import notificationsIco from "../assets/notifications.svg";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { BrowserView, MobileView } from "react-device-detect";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ProfileDropDown from "./ProfileDropDown";
import NotificationsDropDown from "./NotificationsDropDown";

class NavBar extends React.Component {
  toggle = () => {
    this.setState({ dropDown: !this.state.dropDown });
  };
  render() {
    return (
      <div>
        <BrowserView>
          <div className="NavBar">
            <div className="NavBar__logoContainer">
              <img
                alt="Logo"
                src={navLogo}
                className="NavBar__logoContainer__logo"
              />
            </div>
            <div className="NavBar__actionsContainer">
              <NotificationsDropDown />
              <ProfileDropDown />
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="NavBar_mobile">
            <div className="NavBar_mobile__logoContainer">
              <img
                alt="Logo"
                src={navLogo}
                className="NavBar_mobile__logoContainer__logo"
              />
            </div>
            <div className="NavBar_mobile__actionsContainer">
              <NotificationsDropDown />
              <ProfileDropDown />
            </div>
          </div>
        </MobileView>
      </div>
    );
  }
}
NavBar.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
