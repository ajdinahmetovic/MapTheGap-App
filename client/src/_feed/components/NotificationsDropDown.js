import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import notificationsIco from "../assets/notifications.svg";
import { PropTypes } from "prop-types";

class NotificationsDropDown extends React.Component {
  state = {
    notifDrop: false
  };
  render() {
    //localStorage.clear();
    return (
      <Dropdown
        inNavbar={true}
        isOpen={this.state.notifDrop}
        toggle={() => this.setState({ notifDrop: !this.state.notifDrop })}
      >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.notifDrop}
        >
          <span
            onClick={() => this.setState({ notifDrop: !this.state.notifDrop })}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={this.state.notifDrop}
          >
            <img
              alt=""
              //onClick={() => console.log("djes")}
              src={notificationsIco}
              className="NavBar__actionsContainer__actions__notification"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

NotificationsDropDown.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  images: state.imageUploadReducer.images,
  isLoading: state.postReducer.isPostLoading,
  err: state.authReducer.errMsgPosting
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsDropDown);
