import React from 'react';
import '../styles/LoginForm.scss'
import { Input } from './Input';
import { Button } from '../../common/components/Button';
import {  Link } from "react-router-dom";

export class LoginForm extends React.Component {
    render() {
        return (
            <div className="LoginForm">
                <div className="LoginForm__message">
                    <p className="LoginForm__message__txt1">Hello</p>
                    <h3 className="LoginForm__message__txt2">Welcome back</h3>
                </div>

                <div className="LoginForm__form">
                    <Input 
                        placeholder="Username"/> 
                    <Input 
                        type="password"
                        placeholder="Password"/>
                        <Button
                            text="Sign In"
                            type="SignIn"/>
                        <div className="LoginForm__spacer">
                        </div>
                        <div className="LoginForm__form__register"> 
                            <p className="LoginForm__form__register__txt1">
                                You don't have account? 
                            </p>
                            <Link to="/register">
                                <p className="LoginForm__form__register__txt2">
                                    Register
                                </p>
                            </Link>
                           
                        </div>
                </div>

            </div>
        );
    }
}

