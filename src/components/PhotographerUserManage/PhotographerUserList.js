import axios from 'axios';
import React, { Component } from 'react'
import config from '../../config/config';
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class PhotographerUserList extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            list_users_photographer: [],
            token: jsonUser.token
        }
    }

    async makeListUserAccoutns() {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'get',
            url: `${config.host}/api/user_photographer_manage/`
        });
        this.setState({ list_users_photographer: response.data });
    }

    async componentDidMount() {
        await this.makeListUserAccoutns();
    }

    async handleEnableDisableUser(codeUser) {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'put',
            url: `${config.host}/api/user_photographer_manage/${codeUser}`
        });
        await this.makeListUserAccoutns();
        alert(response.data.message);

    }

    renderSocialLink(arrayRedSocial){
        return arrayRedSocial.map(link_social => {
            const listDescription = link_social.split(',');
            let redSocial = listDescription[0].replace("(","").replace(`"`,'').replace(`"`,'');
            let link = listDescription[1].replace(")","");
            switch (redSocial) {
                case "1":
                    return (
                        <a href={link}>
                            <button type="button" className="btn btn-icon btn-round btn-primary" to={link}>
                                <i className="fab fa-facebook" />
                            </button>
                        </a>
                    );
                case "2":
                    return (
                        <a href={link}>
                            <button type="button" className="btn btn-icon btn-round btn-info" to={link}>
                                <i className="fab fa-twitter" />
                            </button>
                        </a>
                    );
                case "3":
                    return (
                        <a href={link}>
                            <button type="button" className="btn btn-icon btn-round btn-warning" to={link}>
                                <i className="fab fa-instagram" />

                            </button>
                        </a>
                    );
                case "4":
                    return (
                        <a href={link}>
                            <button type="button" className="btn btn-icon btn-round btn-default">
                                <i className="fab fa-tumblr-square" />
                            </button>
                        </a>
                    );
                default:
                    return (
                        <a href={link}>
                            <button type="button" className="btn btn-icon btn-link">
                                <i className="fa fa-link" />
                            </button>
                        </a>
                    );
            }
        })
    }

    renderListPhotographerUser() {
        return this.state.list_users_photographer.map(user_photographer => {
            let button;
            if (user_photographer.status) {
                button = <button type="button" className="btn btn-icon btn-round btn-success" onClick={() => this.handleEnableDisableUser(user_photographer.code)}>
                <i className="fa fa-check"></i>
            </button>;
            }else{
                button =<button type="button" className="btn btn-icon btn-round btn-danger" onClick={()=> this.handleEnableDisableUser(user_photographer.code)}>
                <i className="fas fa-times"></i>
            </button>;
            }
            return (
                <tr key={user_photographer.code}>
                    <td>{user_photographer.code}</td>
                    <td>{user_photographer.name}</td>
                    <td>{user_photographer.email}</td>
                    <td>{user_photographer.name_studio}</td>
                    <td>{this.renderSocialLink(user_photographer.array)}</td>
                    <td>{user_photographer.status? 'Active' : 'Locked'}</td>
                    <td>{button}</td>
                </tr>
            );
        })
    }

    render() {
        return (
            <div className="wrapper sidebar_minimize">
                <Header />
                <Sidebar />
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Photographer Users List</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <i className="flaticon-home" />
                                    </li>
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                    <li className="nav-item">
                                        Photographer User Manage
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Administration</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <table className="table table-head-bg-success">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Photo Studio</th>
                                                            <th scope="col">Red Social</th>
                                                            <th scope="col">State</th>
                                                            <th scope="col">Options</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.renderListPhotographerUser()}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
