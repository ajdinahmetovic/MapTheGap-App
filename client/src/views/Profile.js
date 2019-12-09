import React from "react";
import "../styles/Profile.scss";
import { Input, InputGroup, Form, Spinner } from "reactstrap";
import { Button } from "../../common/components/Button";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth_actions";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import NavBar from "../_feed/components/NavBar";

export class Profile extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Profile">
          <div className="Profile__sideBar"></div>
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
