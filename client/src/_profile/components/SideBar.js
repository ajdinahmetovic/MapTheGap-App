import React from "react";
import "../styles/NavBar.scss";
import navLogo from "../assets/navlogo.svg";
import notificationsIco from "../assets/notifications.svg";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class SideBar extends React.Component {
  render() {
    return <div></div>;
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
