import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config'
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class EventManageStudio extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            list_events: [],
            token: jsonUser.token,
            email: jsonUser.email
        }
    }

    async getListEvent() {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'get',
            url: `${config.host}/api/event_manage/studio/${this.state.email}`
        });
        this.setState({ list_events: response.data });
    }

    async componentDidMount() {
        await this.getListEvent();
    }

    renderListEvent() {
        return this.state.list_events.map(event => {
            let button;
            if (!event.status_request) {
                button = <div>
                    Accepted <i class="fa fa-check" aria-hidden="true"></i>
                </div>;
            } else {
                button = <button type="button" className="btn btn-block btn-sm btn-success" onClick={() => this.handleAccept(event.code)} >
                    Accept
                </button>;
            }
            return (
                <tr key={event.code}>
                    <td>{event.code}</td>
                    <td>{event.description}</td>
                    <td>{event.date_event}</td>
                    <td>{event.name}</td>
                    <td>{event.studio_name}</td>
                    <td>{event.status_request? 'Active': 'Denied'}</td>
                    <td>{button}</td>
                </tr>
            );
        })
    }

    handleAccept = async (code) => {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'put',
            url: `${config.host}/api/event_manage/${code}`
        });
        console.log(response.data);
        var divContents = document.getElementById("printdivcontent").innerHTML;  
        var printWindow = window.open('', '', 'height=400,width=400');  
        printWindow.document.write(response.data);  
        printWindow.document.write(divContents);
        printWindow.document.close();  
        printWindow.print();  
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
                                <h4 className="page-title">Event Manage</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <Link to='/'>
                                            <i className="flaticon-home" />
                                        </Link>
                                    </li>
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                    <li className="nav-item">
                                        Event Manage Photo Studio
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
                                                <table className="table table-head-bg-info">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Owner Event</th>
                                                            <th scope="col">Photo Studio</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.renderListEvent()}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="printdivcontent">

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
