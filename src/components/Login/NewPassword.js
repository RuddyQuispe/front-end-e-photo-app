import axios from 'axios';
import React, { Component } from 'react'
import config from '../../config/config';

export default class NewPassword extends Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            password_retype : ""
        };
    }

    onChangePassword = (e) => this.setState({password : e.target.value});

    onChangePasswordRetype = (e) => this.setState({password_retype : e.target.value});

    onChangeEmail = (e) => this.setState({email : e.target.value});

    handleChangeEmail = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${config.host}/api/auth/verify_password`, this.state);
        alert(response.data.message);
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="ui-background">
                <div className="container">
                    <div className="abs-center">
                        <form className="bg-light px-4 py-3" onSubmit={this.handleChangeEmail}>
                            <h3>Account</h3>
                            <div className="form-group form-group-default">
                                <label htmlFor="exampleDropdownFormEmail1">passowrd</label>
                                <input type="password" className="form-control" id="exampleDropdownFormEmail1" placeholder="xxxxxxxx" onChange={this.onChangePassword} />
                            </div>
                            <div className="form-group form-group-default">
                                <label>Retype password</label>
                                <input type="password" className="form-control" id="exampleDropdownFormEmail1" placeholder="xxxxxxxx" onChange={this.onChangePasswordRetype} />
                            </div>
                            <div className="form-group form-group-default">
                                <label>Email Account</label>
                                <input type="text" className="form-control" id="exampleDropdownFormEmail1" placeholder="email account" onChange={this.onChangeEmail} />
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>
                        <div className="dropdown-divider" />
                    </div>
                </div>
            </div>
        )
    }
}
