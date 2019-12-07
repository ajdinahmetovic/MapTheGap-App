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
  Row
} from "reactstrap";
import { Button } from "../../../common/components/Button";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export class NGO extends React.Component {
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
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
              </FormGroup>

              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.WORK_FIELD")}
                </Label>
                <Input
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
                <Input placeholder={this.context.t("APP.PHONE_PLACE")}></Input>
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.EMAIL")}
                </Label>
                <Input
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
                <Label className="NGO__Form__label">
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
                <Input />
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.ADRESS")}
                </Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label className="NGO__Form__label">
                  {this.context.t("APP.PASSWORD")}
                </Label>

                <Input
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
          </Col>
        </Row>
      </Container>
    );
  }
}

NGO.contextTypes = {
  t: PropTypes.func
};
