import React from "react";
import "../styles/NavBar.scss";
import navLogo from "../assets/navlogo.svg";
import notificationsIco from "../assets/notifications.svg";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class NavBar extends React.Component {
  render() {
    return (
      <body>
        <div className="NavBar">
          <img src={navLogo} className="NavBar__logo" />
          <div className="NavBar__actions">
            <img
              onClick={() => console.log("djes")}
              src={notificationsIco}
              className="NavBar__actions__notification"
            />
            <img
              className="NavBar__actions__avatar"
              src={
                "https://api.adorable.io/avatars/400/c792eeb6cb3eff2b58b5e16c5de7344e.png"
              }
            />
          </div>
        </div>
      </body>
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
