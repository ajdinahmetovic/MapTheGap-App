import React from "react";
import "./styles/Profile.scss";
import { Input, InputGroup, Form, Spinner } from "reactstrap";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import NavBar from "../_feed/components/NavBar";
import SideBar from "../_profile/components/SideBar";

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="Profile__nav">
          <NavBar />
        </div>
        <div className="Profile">
          <div className="Profile__sideBar">
            <SideBar />
          </div>
          <div className="Profile__content"></div>
        </div>
      </div>
    );
  }
}

Profile.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
