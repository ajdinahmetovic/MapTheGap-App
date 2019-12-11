import React from "react";
import "../styles/NavBar.scss";
import navLogo from "../assets/navlogo.svg";
import notificationsIco from "../assets/notifications.svg";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar__logoContainer">
          <img
            alt="Logo"
            src={navLogo}
            className="NavBar__logoContainer__logo"
          />
        </div>
        <div className="NavBar__actionsContainer">
          <img
            alt=""
            //onClick={() => console.log("djes")}
            src={notificationsIco}
            className="NavBar__actionsContainer__actions__notification"
          />
          <img
            alt="User avatar"
            className="NavBar__actionsContainer__actions__avatar"
            src={
              "https://api.adorable.io/avatars/400/c792eeb6cb3eff2b58b5e16c5de7344e.png"
            }
          />
        </div>
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
