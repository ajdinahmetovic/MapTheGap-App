import React from 'react';
import '../styles/BlockOne.scss';
import { Button } from '../../common/components/Button';
import ideaVec from '../assets/idea.svg';
import logo from '../assets/logo.svg';
import { BrowserView, MobileView } from 'react-device-detect';

import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export class BlockOne extends React.Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <div>
        <BrowserView>
          <div className="BlockOne">
            <div className="BlockOne__nav">
              <div className="BlockOne__nav__brand">
                <div>
                  <img
                    alt="Logo"
                    className="BlockOne__nav__brand__img"
                    src={logo}
                  />
                </div>
              </div>
              <Link to="/login">
                <Button text={'Login'} type={'Login'} />
              </Link>
              <div className="BlockOne__nav__brand__distancer"></div>
              <Link to="/register">
                <Button text={'Register'} type={'Register'} />
              </Link>
            </div>
            <div className="BlockOne__heading">
              <div className="BlockOne__heading__content">
                <p className="BlockOne__heading__content__txt1">
                  Trying to find solution
                </p>
                <p className="BlockOne__heading__content__txt2">
                  for local problem ?
                </p>
                <p className="BlockOne__heading__content__txt3">
                  solve.it is platform for lorem ipsum dolorem sit consectetur
                  adipiscing elit. Integer felis mi, aliquam at aliquet
                  pellentesque.
                </p>
              </div>
              <div className="BlockOne__heading__animation">
                <img
                  alt="img"
                  className="BlockOne__heading__animation__img"
                  src={ideaVec}
                />
              </div>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="BlockOne_m">
            <Navbar color="faded" dark>
              <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
              <NavbarToggler
                onClick={() => {
                  this.setState({ isOpen: !this.state.isOpen });
                }}
                className="mr-2"
              />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>{' '}
            <p>content</p>
          </div>
        </MobileView>
      </div>
    );
  }
}
