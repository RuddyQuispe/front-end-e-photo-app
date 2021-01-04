import axios from 'axios';
import React, { Component } from 'react';
import config from '../../config/config';
import FooterOut from '../template/others/FooterOut';
import HeaderOut from '../template/others/HeaderOut';


export default class OrganizeUserManage extends Component {

    state = {
        name : "",
        phone: "",
        email: "",
        password: ""
    }

    handleRegisterAccountOrganizerUser = async () => {
        const response = await axios.post(`${config.host}/api/auth/signup/0`,this.state);
        console.log(response.data);
        const {token, message} = response.data;
        alert(message);
        if (!token) {
            alert("Error");
        }else{
            console.log(`token: ${token}`);
            window.sessionStorage.setItem("USER_AUTH",JSON.stringify({
                token: response.data.token,
                email: this.state.email,
                type: "Organizer User"
            }));
            this.props.history.push("/");
        }
    }

    onChangeName = (e) => {
        this.setState({name : e.target.value});
    }

    onChangeEmail = (e) => {
        this.setState({email : e.target.value});
    }

    onChangePhone = (e) => {
        this.setState({phone : e.target.value});
    }

    onChangePassword = (e) => {
        this.setState({passwd : e.target.value});
    }

    render() {
        return (
            <div className="wrapper overlay-sidebar">
                <HeaderOut />
                <div className="main-panel">
                    <div className="content">
                        <div className="panel-header bg-primary-gradient">
                            <div className="page-inner py-5">
                                <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
                                    <div>
                                        <h2 className="text-white pb-2 fw-bold">Register Event Organizer User</h2>
                                        <h5 className="text-white op-7 mb-2">E-photo-App Software</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-inner mt--5">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-head-row">
                                                <div className="card-title">New Account</div>
                                                <div className="card-tools">
                                                    <button className="btn btn-info btn-border btn-round btn-sm mr-2" onClick={this.handleRegisterAccountOrganizerUser}>
                                                        Create Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Name</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="text" className="form-control input-full" id="inlineinput" placeholder="Enter name" onChange={this.onChangeName}/>
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Email</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="email" className="form-control input-full" id="inlineinput" placeholder="Enter email" onChange={this.onChangeEmail}/>
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Phone</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="number" className="form-control input-full" id="inlineinput" minLength="8" placeholder="Enter name" onChange={this.onChangePhone} />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Password</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="password" className="form-control input-full" id="inlineinput" minLength="6" placeholder="Password" onChange={this.onChangePassword} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterOut />
                </div>
            </div>
        )
    }
}
