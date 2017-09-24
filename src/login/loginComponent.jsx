import React from 'react'
import PropTypes from 'prop-types'
import { injectReducer } from '../store/reducers'
import { loginReducer } from './loginReducer'

import { LOGIN_REQUEST } from './loginReducer'

const { Component } = React

class Login extends Component { 

    userLoggedIn = false;

    constructor(props) {
        super(props);
        injectReducer(this.props.store, {key: "login", reducer: loginReducer});
        this.props.store.subscribe(this.handleStateChange.bind(this))
    }

    handleStateChange() {
        const state = this.props.store.getState().login;
        if (state.complete && state.isLogedIn) {
            
                this.userLoggedIn = true;
                this.userName = 'Roy Birger'            
                this.forceUpdate()
        }
    }

    login() {
        this.props.store.dispatch(
            {
                type: LOGIN_REQUEST
            }
        )
    }

    render() {
        return (
            <div className="login-container">
                <span>Light Mail</span>
                { 
                    this.userLoggedIn 
                    ? <span style={{display: "block"}}>Welcome {this.userName}</span>
                    : <button onClick={this.login.bind(this)} style={{display: "block"}}>Login</button> 
                }
                
            </div>
        )
    }

}

Login.propTypes = {
    store: PropTypes.object.isRequired
} 

export default Login