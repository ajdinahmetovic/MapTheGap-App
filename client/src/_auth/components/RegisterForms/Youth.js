import React from "react";
import "./styles/NGO.scss";
import {
  Input,
  InputGroup,
  Form,
  Container,
  Col,
  Label,
  FormGroup,
  Row,
  Spinner
} from "reactstrap";
import { Button } from "../../../common/components/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/auth_actions";
import { PropTypes } from "prop-types";

class Youth extends React.Component {
  state = {
    address: "",
    user_type: 1
  };
  render() {
    return (
      <Container className="NGO__Container">
        <Row>
          <Col xs="6">
            <Form className="NGO__Form">
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.REGISTER.FULL_NAME")}
                </Label>
                <Input
                  onChange={e => this.setState({ name: e.target.value })}
                  type="email"
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.REGISTER.FULL_NAME")
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.EMAIL")}
                </Label>
                <Input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  name="email"
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.EMAIL")
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.PHONE")}
                </Label>
                <Input
                  type="tel"
                  onChange={e =>
                    this.setState({ phone_number: e.target.value })
                  }
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.PHONE")
                  }
                ></Input>
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.PASSWORD")}
                </Label>

                <Input
                  onChange={e =>
                    this.setState({
                      password: e.target.value
                    })
                  }
                  type="password"
                  name="password"
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.PASSWORD")
                  }
                />
              </FormGroup>
            </Form>
          </Col>
          <Col xs="6">
            <Form className="NGO__Form">
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.COUNTRY")}
                </Label>
                <Input
                  type="select"
                  onChange={e => this.setState({ country: e.target.value })}
                >
                  <option default>
                    {this.context.t("APP.REGISTRATION.SELECT_YOUR") +
                      this.context.t("APP.COUNTRY")}
                  </option>
                  <option>{this.context.t("APP.BOSNIA")}</option>
                  <option>{this.context.t("APP.MACEDONIA")}</option>
                  <option>{this.context.t("APP.MONTENEGRO")}</option>
                  <option>{this.context.t("APP.SLOVENIA")}</option>
                  <option>{this.context.t("APP.POLAND")}</option>
                  <option>{this.context.t("APP.SERBIA")}</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.CITY")}
                </Label>
                <Input
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.CITY")
                  }
                  onChange={e =>
                    this.setState({
                      city: e.target.value
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.ADRESS")}
                </Label>
                <Input
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.ADRESS")
                  }
                  onChange={e =>
                    this.setState({
                      address: e.target.value
                    })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.DATE_OF_BIRTH")}
                </Label>
                <Input
                  type="date"
                  placeholder={
                    this.context.t("APP.REGISTRATION.ENTER_YOUR") +
                    this.context.t("APP.DATE_OF_BIRTH")
                  }
                  onChange={e =>
                    this.setState({
                      date_of_birth: e.target.value
                    })
                  }
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <div className="NGO__btn">
          <FormGroup>
            <Label className="NGO__checkLabel">
              <Input className="NGO__checkbox" type="checkbox" />
              <p className="NGO__checkTxt">
                {this.context.t("APP.REGISTRATION.I_AGREE")}{" "}
                <a className="NGO__checkRed">
                  {this.context.t("APP.REGISTRATION.TERMS_CONDITIONS")}
                </a>
              </p>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label className="NGO__checkLabel2">
              <Input className="NGO__checkbox" type="checkbox" />
              <p className="NGO__checkTxt">
                {this.context.t("APP.REGISTRATION.I_AGREE")}{" "}
                <a className="NGO__checkRed">
                  {this.context.t("APP.REGISTRATION.PRIVACY_POLICY")}
                </a>
              </p>
            </Label>
          </FormGroup>
          {this.props.isLoading ? (
            <Spinner color="#001988" />
          ) : (
            <Button
              onClick={() => this.props.registerUser(this.state)}
              text={this.context.t("APP.REGISTER")}
              type={"Register"}
            />
          )}
          <p className="NGO__errMsg">{this.props.err}</p>
        </div>
      </Container>
    );
  }
}

Youth.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {
  registerUser: user => registerUser(user)
};
export default connect(mapStateToProps, mapDispatchToProps)(Youth);
