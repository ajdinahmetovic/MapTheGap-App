import React from "react";
import "../styles/LoginForm.scss";
import {
  Input,
  InputGroup,
  Form,
  Spinner,
  FormGroup,
  Label,
  Container,
  Col,
  Row
} from "reactstrap";
import { Button } from "../../common/components/Button";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth_actions";

import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class LoginForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.EMAIL")}
                </Label>
                <Input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.PASSWORD")}
                </Label>
                <Input
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
              </FormGroup>

              <div className="LoginForm__actionBlock">
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
          </Col>
        </Row>
      </Container>
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
