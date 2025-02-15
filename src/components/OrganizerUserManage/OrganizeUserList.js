import axios from 'axios';
import React, { Component } from 'react'
import config from '../../config/config';
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class OrganizeUserList extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            list_users_organizer: [],
            token: jsonUser.token
        }
    }

    async makeListUserAccoutns() {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'get',
            url: `${config.host}/api/user_organizer_manage`
        });
        this.setState({ list_users_organizer: response.data });
    }

    async componentDidMount() {
        await this.makeListUserAccoutns();
    }

    async handleEnableDisableUser(codeUser) {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'put',
            url: `${config.host}/api/user_organizer_manage/${codeUser}`
        });
        await this.makeListUserAccoutns();
        alert(response.data.message);

    }

    renderListOrganizerUser() {
        return this.state.list_users_organizer.map(user_organizer => {
            let button;
            if (user_organizer.status) {
                button = <button type="button" className="btn btn-icon btn-round btn-success" onClick={() => this.handleEnableDisableUser(user_organizer.id)}>
                <i className="fa fa-check"></i>
            </button>;
            }else{
                button =<button type="button" className="btn btn-icon btn-round btn-danger" onClick={()=> this.handleEnableDisableUser(user_organizer.id)}>
                <i className="fas fa-times"></i>
            </button>;
            }
            return (
                <tr key={user_organizer.id}>
                    <td>{user_organizer.id}</td>
                    <td>{user_organizer.name}</td>
                    <td>{user_organizer.email}</td>
                    <td>{user_organizer.phone}</td>
                    <td>{user_organizer.status? 'Active' : 'Locked'}</td>
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
                                <h4 className="page-title">Organizer Users List</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <i className="flaticon-home" />
                                    </li>
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                    <li className="nav-item">
                                        Organizer Event User Manage
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
                                                <table className="table table-head-bg-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col">Phone</th>
                                                            <th scope="col">State</th>
                                                            <th scope="col">Options</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.renderListOrganizerUser()}
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
