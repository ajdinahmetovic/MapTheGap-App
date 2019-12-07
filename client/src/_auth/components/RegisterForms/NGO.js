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

class NGO extends React.Component {
  state = {
    address: ""
  };
  render() {
    return (
      <Container className="NGO__Container">
        <Row>
          <Col xs="6">
            <Form className="NGO__Form">
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.REGISTER.NGO_NAME")}
                </Label>
                <Input
                  onChange={e => this.setState({ name: e.target.value })}
                  type="email"
                  placeholder={this.context.t("APP.REGISTER.NGO_NAME")}
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.WORK_FIELD")}
                </Label>
                <Input
                  onChange={e =>
                    this.setState({ fieldOfAction: e.target.value })
                  }
                  placeholder={this.context.t("APP.WORK_FIELD")}
                  type="select"
                >
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.PHONE")}
                </Label>
                <Input
                  onChange={e => this.setState({ phoneNumber: e.target.value })}
                  placeholder={this.context.t("APP.PHONE_PLACE")}
                ></Input>
              </FormGroup>
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
                  {this.context.t("APP.REGISTRATION.DOCUMENT_UPLOAD")}
                </Label>
                <Input type="file" name="file" id="exampleFile" />
              </FormGroup>
            </Form>
          </Col>
          <Col xs="6">
            <Form className="NGO__Form">
              <FormGroup>
                <Label
                  onChange={e => this.setState({ country: e.target.value })}
                  className="NGO__Form__label"
                >
                  {this.context.t("APP.COUNTRY")}
                </Label>
                <Input type="select">
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.CITY")}
                </Label>
                <Input
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
                  onChange={e =>
                    this.setState({
                      address: e.target.value
                    })
                  }
                />
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
                  placeholder="Enter password"
                />
              </FormGroup>
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
            </Form>
            <div className="NGO__btn">
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
          </Col>
        </Row>
      </Container>
    );
  }
}

NGO.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {
  registerUser: user => registerUser(user)
};
export default connect(mapStateToProps, mapDispatchToProps)(NGO);
