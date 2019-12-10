import React from "react";
import "../styles/LoginForm.scss";
import { Input, InputGroup, Form, Spinner } from "reactstrap";
import { Button } from "../../common/components/Button";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth_actions";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class LoginForm extends React.Component {
  render() {
    return (
      <Form className="LoginForm">
        <div className="LoginForm__message">
          <p className="LoginForm__message__txt1">Hello</p>
          <h3 className="LoginForm__message__txt2">Welcome back</h3>
        </div>

        <div className="LoginForm__form">
          <InputGroup>
            <Input
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <Input
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </InputGroup>
          <br />
          <br />
          {this.props.isLoading ? (
            <Spinner color="#001988" />
          ) : (
            <Button
              onClick={() => this.props.loginUser(this.state)}
              text="Sign In"
              type="SignIn"
            />
          )}
          <p className="NGO__errMsg">{this.props.err}</p>
          <div className="LoginForm__form__register">
            <p className="LoginForm__form__register__txt1">
              You don't have account?
            </p>
            <Link to="/register">
              <p className="LoginForm__form__register__txt2">Register</p>
            </Link>
          </div>
        </div>
      </Form>
    );
  }
}

LoginForm.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.loginLoading,
  err: state.authReducer.loginErr
});
const mapDispatchToProps = {
  loginUser: user => loginUser(user)
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
