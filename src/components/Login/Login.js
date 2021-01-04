import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config/config';
import './Login.css';
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    onChangeEmail = (e) => this.setState({email: e.target.value});

    onChangePassword = (e) => this.setState({password: e.target.value});

    handleSignIn = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${config.host}/api/auth/signin`, this.state);
        if (response.data.token) {
            window.sessionStorage.setItem("USER_AUTH",JSON.stringify({
                token: response.data.token,
                email: this.state.email,
                type: response.data.type
            }));
            this.props.history.push("/");
            alert(response.data.message);
        }else{
            alert(response.data.message);
        }
    }

    render() {
        return (
            <div className="ui-background">
                <div className="container">
                    <div className="abs-center">
                        <form className="p-3 my-3 bg-light text-dark" onSubmit={this.handleSignIn}>
                            <h3>Log in</h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.onChangePassword} />
                            </div>
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            <p className="forgot-password text-right">
                                Forgot <Link to='/restore_account'>password?</Link>
                            </p>
                            <Link type="button" className="btn btn-primary btn-lg btn-block" to='/event_organizer_user_manage'>
                                <i class="icon-camera"></i> New Organizer User
                            </Link>
                            <Link type="button" className="btn btn-success btn-lg btn-block" to='/photographer_user_manage'>
                                <i class="icon-briefcase"></i> New Photographer User
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
