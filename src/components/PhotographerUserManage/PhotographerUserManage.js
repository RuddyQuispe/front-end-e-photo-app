import axios from 'axios'
import React, { Component } from 'react'
import config from '../../config/config'
import FooterOut from '../template/others/FooterOut'
import HeaderOut from '../template/others/HeaderOut'

export default class PhotographerUserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            id_studio: 1,
            list_social: [],
            social_link: "",
            list_social_options: [],
            social_selected: 1,
            list_studio_options: [],
        }
    }

    async componentDidMount() {
        const response = await axios.get(`${config.host}/api/auth/signup/photographer`);
        this.setState({
            list_social_options: response.data.list_social,
            list_studio_options: response.data.list_studio
        });
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
        console.log(this.state.username);
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
        console.log(this.state.email);
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
        console.log(this.state.password);
    }

    onChangeIdStudio = (e) => {
        this.setState({ id_studio: e.target.value });
        console.log(this.state.id_studio);
    }

    onChangeSocialLink = (e) => {
        this.setState({ social_link: e.target.value });
        console.log(this.state.social_link);
    }

    onChangeOptionSocial = (e) => {
        this.setState({ social_selected: e.target.value });
        console.log(this.state.social_selected);
    }

    handleUpdloadNewSocialLink = () => {
        if (this.state.social_link.length > 0) {
            let listSocial = this.state.list_social;
            listSocial.push({
                id: this.state.social_selected,
                description: this.state.social_link
            });
            this.setState({
                list_social: listSocial
            });
            console.log(this.state.list_social);
        } else {
            alert("Error, assign link social red");
        }
    }

    renderOptionSocialRed() {
        return this.state.list_social_options.map(social => {
            return (
                <option key={social.id} value={social.id}>{social.description}</option>
            )
        })
    }

    renderOptionPhotoStudioAssign() {
        return this.state.list_studio_options.map(studio => {
            return (
                <option key={studio.id} value={studio.id}>{studio.name}</option>
            )
        })
    }

    handleAccountPhotographer = async () => {
        // let {username, email, password, id_studio, list_social} = this.state;
        let response = await axios.post(`${config.host}/api/auth/signup/1`, {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            id_studio: this.state.id_studio,
            list_social: this.state.list_social
        });
        alert(response.data.message);
        if (response.data.token) {
            console.log(`token: ${response.data.token}`);
            window.sessionStorage.setItem("USER_AUTH",JSON.stringify({
                token: response.data.token,
                email: this.state.email,
                type: "photographer"
            }));
            this.props.history.push("/");
        } else {
            console.log("no token");
        }
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
                                        <h2 className="text-white pb-2 fw-bold">Register Photographer User</h2>
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
                                                    <button className="btn btn-info btn-border btn-round btn-sm mr-2" onClick={this.handleAccountPhotographer}>
                                                        <span className="btn-label">
                                                            <i className="fa fa-pencil" />
                                                        </span>Create Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Name</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="text" className="form-control input-full" id="inlineinput" placeholder="Enter name" onChange={this.onChangeUsername} />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Email</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="email" className="form-control input-full" id="inlineinput" placeholder="Enter email" onChange={this.onChangeEmail} />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Password</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="password" className="form-control input-full" id="inlineinput" minLength="6" placeholder="Password" onChange={this.onChangePassword} />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Photo Studio</label>
                                                <div className="col-md-9 p-0">
                                                    <select className="form-control" id="exampleFormControlSelect2" onChange={this.onChangeIdStudio}>
                                                        {this.renderOptionPhotoStudioAssign()}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Social Red</label>
                                                <div className="input-group col-md-5 p-0">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon3">https://fb.com/...</span>
                                                    </div>
                                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={this.onChangeSocialLink} />
                                                </div>
                                                <div className="input-group col-md-2 p-1">
                                                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChangeOptionSocial}>
                                                        {this.renderOptionSocialRed()}
                                                    </select>
                                                </div>
                                                <div className="input-group col-md-2 p-1">
                                                    <button className="btn btn-secondary" onClick={this.handleUpdloadNewSocialLink}>Upload</button>
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