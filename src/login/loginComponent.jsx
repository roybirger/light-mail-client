import React from 'react'
import PropTypes from 'prop-types'
import { injectReducer } from '../store/reducers'
import { loginReducer } from './loginReducer'

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './loginReducer'

const { Component } = React

class Login extends Component { 

    CLIENT_ID = '955857112157-2p7irppgmcvcg704haloftnenm3l8qce.apps.googleusercontent.com';

    DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
      
    SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    userLoggedIn = false;

    constructor(props) {
        super(props);
        injectReducer(this.props.store, {key: "login", reducer: loginReducer});
        this.props.store.subscribe(this.handleStateChange.bind(this))

        const script = document.createElement("script");
        document.body.appendChild(script);

        script.src = "https://apis.google.com/js/api.js";
        script.async = true;
        script.onload = () => window.gapi.load('client:auth2', this.initClient.bind(this));
        script.onreadystatechange = () => { if (this.readyState === 'complete') this.onload() }

    }

    initClient () {
        window.gapi.client.init({
          discoveryDocs: this.DISCOVERY_DOCS,
          clientId: this.CLIENT_ID,
          scope: this.SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this));

          // Handle the initial sign-in state.
          this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          
        }.bind(this));
    }

    authorize() {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    updateSigninStatus(isSignedIn) {
        
               
        if (isSignedIn) {
          this.userName = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName();

          loginService().login('token');

        }

        this.forceUpdate();

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

        fetch('http://localhost:8090/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'localhost:8080'
            },
            body: JSON.stringify({
                token: "token"
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.success) {
                this.props.store.dispatch({
                    type: LOGIN_SUCCESS
                })
            } else {
                this.props.store.dispatch({
                    type: LOGIN_FAILED
                })
            }
            
        })
        
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