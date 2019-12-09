import React from "react";
import "../styles/Create.scss";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import ngoIco from "../assets/ngo.svg";
import upWote from "../assets/upwote.svg";
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

import youthIco from "../assets/youth.svg";
import { Button } from "../../common/components/Button";

class Create extends React.Component {
  state = {
    isPosting: false
  };
  //https://music.youtube.com/watch?v=sQKNaVKzjSI&list=RDMMDbBbnHI7JdU
  render() {
    if (this.state.isPosting) {
      return this.rederForm();
    } else {
      return this.renderContainer();
    }
  }

  renderContainer = () => {
    return (
      <div
        className="Create"
        onClick={() => this.setState({ isPosting: true })}
      >
        <div className="Create__container">
          <img
            className="Create__container__img"
            src="https://api.adorable.io/avatars/400/42621c0aeeefffbef5421b9e7a02b389.png"
          />
          <p className="Create__container__txt">
            {this.context.t("APP.WHAT_IS_PROBLEM")}
          </p>
        </div>
        <div className="Create__line"></div>
      </div>
    );
  };

  rederForm = () => {
    return (
      <div className="Create">
        <div className="Create__container">
          <img
            className="Create__container__img"
            src="https://api.adorable.io/avatars/400/42621c0aeeefffbef5421b9e7a02b389.png"
          />
          <p className="Create__container__txt">
            {this.context.t("APP.TELL_US_MORE")}
          </p>
        </div>
        <div className="Create__formContainer">
          <Form className="Create__form">
            <FormGroup>
              <Label className="NGO__Form__label">
                {this.context.t("APP.PROBLEM_TITLE")}
              </Label>
              <Input
                onChange={e => this.setState({ problem_title: e.target.value })}
                type="email"
                placeholder={this.context.t("APP.PROBLEM_TITLE")}
              />
            </FormGroup>
            <FormGroup>
              <Label className="NGO__Form__label">
                {this.context.t("APP.SHORT_DESCRIPTION")}
              </Label>
              <Input
                onChange={e => this.setState({ problem_title: e.target.value })}
                type="textarea"
                maxlength={10}
                cols={20}
                placeholder={this.context.t("APP.SHORT_DESCRIPTION")}
              />
            </FormGroup>
            <FormGroup>
              <Label className="NGO__Form__label">
                {this.context.t("APP.DETAIL_DESCRIPTION")}
              </Label>
              <Input
                onChange={e => this.setState({ problem_title: e.target.value })}
                type="textarea"
                maxlength={10}
                rows={5}
                placeholder={this.context.t("APP.DETAIL_DESCRIPTION")}
              />
            </FormGroup>
            <FormGroup>
              <Label className="NGO__Form__label">
                {this.context.t("APP.VISION_SOLUTION")}
              </Label>
              <Input
                onChange={e => this.setState({ problem_title: e.target.value })}
                type="textarea"
                maxlength={10}
                rows={5}
                placeholder={this.context.t("APP.VISION_SOLUTION")}
              />
            </FormGroup>
            <Container>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label
                      onChange={e => this.setState({ country: e.target.value })}
                      className="NGO__Form__label"
                    >
                      {this.context.t("APP.PROBLEM_FIELD")}
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
                      {this.context.t("APP.PROBLEM_PICTURE")}
                    </Label>
                    <Input type="file" name="file" id="exampleFile" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label
                      onChange={e => this.setState({ country: e.target.value })}
                      className="NGO__Form__label"
                    >
                      {this.context.t("APP.PROBLEM_DELEGATE_TO")}
                    </Label>
                    <Input type="select">
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label className="NGO__checkLabel2">
                      <Input className="NGO__checkbox" type="checkbox" />
                      <p className="NGO__checkTxt">
                        {this.context.t("APP.PROBLEM_PARTICIPATE")}{" "}
                      </p>
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </Container>
          </Form>
          <div className="Create__actionContainer">
            <Button
              onClick={() => this.setState({ isPosting: false })}
              text={this.context.t("APP.CANCEL")}
              type={"DismissBtn"}
            />
            <Button text={this.context.t("APP.POST")} type={"PostBtn"} />
          </div>
        </div>
      </div>
    );
  };
}
Create.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  err: state.authReducer.NGO_ERR
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Create);
