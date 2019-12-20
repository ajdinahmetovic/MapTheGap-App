import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../styles/ProfileDropDown.scss';
import { Link } from 'react-router-dom';

class ProfileDropDown extends React.Component {
  state = {
    dropDown: false
  };
  logOut() {
    console.log('DJES');
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    //localStorage.clear();
    return (
      <Dropdown
        inNavbar={true}
        isOpen={this.state.dropDown}
        toggle={() => this.setState({ dropDown: !this.state.dropDown })}
        className="NavBar__actionsContainer__dropdown"
      >
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropDown}
          caret
        >
          <span
            onClick={() => this.setState({ dropDown: !this.state.dropDown })}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              alt="User avatar"
              className="NavBar__actionsContainer__actions__avatar"
              src={
                'https://api.adorable.io/avatars/400/c792eeb6cb3eff2b58b5e16c5de7344e.png'
              }
            />
          </span>
        </DropdownToggle>
        <DropdownMenu right className="PDD">
          <Link to="/profile">
            <div className="PDD__firstItem">
              <p className="PDD__txt">Profile</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className="PDD__line" />
            <div className="PDD__firstItem">
              <p className="PDD__txt">Awards</p>
            </div>
          </Link>
          <div className="PDD__line" />
          <div onClick={() => this.logOut()} className="PDD__firstItem">
            <p className="PDD__txt">Log out</p>
          </div>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

ProfileDropDown.contextTypes = {
  t: PropTypes.func
};

const mapStateToProps = state => ({
  images: state.imageUploadReducer.images,
  isLoading: state.postReducer.isPostLoading,
  err: state.authReducer.errMsgPosting
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropDown);
