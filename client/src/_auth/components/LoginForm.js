import React from "react";
import "../styles/LoginForm.scss";
import { Input, InputGroup, Form } from "reactstrap";
import { Button } from "../../common/components/Button";
import { Link } from "react-router-dom";

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
            <Input type="email" name="email" placeholder="Enter your Email" />
          </InputGroup>
          <br />
          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </InputGroup>
          <br />
          <br />
          <Button text="Sign In" type="SignIn" />
          <br />
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
