import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config'
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class EventRegisterOrganizer extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            description: "",
            date_event: "",
            location: "",
            id_photo_studio: 1,
            token: jsonUser.token,
            email: jsonUser.email,
            list_options_studio: [],
            list_event: []
        }
    }

    onChangeDescription = (e) => this.setState({description: e.target.value});
    onChangeDateEvent = (e) => this.setState({date_event: e.target.value});
    onChangeLocation = (e) => this.setState({location: e.target.value});
    onChangePhotoStudio = (e) => this.setState({id_photo_studio: e.target.value});

    async getListEvent() {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'get',
            url: `${config.host}/api/event_manage/organizer/${this.state.email}`
        });
        this.setState({ list_options_studio: response.data.photo_studio_options, list_event: response.data.list_event });
        console.log(this.state.list_event);
    }

    async componentDidMount() {
        await this.getListEvent();
    }

    renderOptionsPhotoStudio() {
        return this.state.list_options_studio.map(studio => {
            return (
                <option key={studio.id} value={studio.id}>{studio.name}</option>
            );
        })
    }

    renderStatus(status_request){
        if (status_request) {
            return(
                <div><i class="fa fa-check"></i> Acepted</div>
            )
        }else{
            return(
                <div><i class="fas fa-spinner"></i> Denied</div>
            )
        }
    }

    renderListEventOrganizer() {
        return this.state.list_event.map(event => {
            return (
                <tr key={event.code}>
                    <td>{event.code}</td>
                    <td>{event.description}</td>
                    <td>{event.date_event}</td>
                    <td>{event.location}</td>
                    <td>{this.renderStatus(event.status_request)}</td>
                    <td>{event.studio_name}</td>
                </tr>
            );
        })
    }

    handleRegisterEvent = async (e) => {
        e.preventDefault();
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'post',
            url: `${config.host}/api/event_manage`,
            data: {
                description: this.state.description, 
                date_event: this.state.date_event, 
                location: this.state.location, 
                id_photo_studio: this.state.id_photo_studio, 
                email_user: this.state.email
            }
        });
        alert(response.data.message);
        await this.getListEvent();
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
                                        Event Organizer Manage
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Event</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-4">
                                                    <div className="card-title">Register</div>
                                                    <div className="form-group">
                                                        <label htmlFor="email2">Description</label>
                                                        <input type="text" className="form-control" placeholder="description event" onChange={this.onChangeDescription} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">Date Event</label>
                                                        <input type="date" className="form-control" placeholder="2020-03-05" onChange={this.onChangeDateEvent} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Location</label>
                                                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="Av. la barranca..." onChange={this.onChangeLocation} maxLength={25} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Photo Studio Assign</label>
                                                        <select className="form-control" onChange={this.onChangePhotoStudio} >
                                                            {this.renderOptionsPhotoStudio()}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-success" onClick={this.handleRegisterEvent}>Register</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-8">
                                                    <div className="card-title">Your Event</div>
                                                    <table className="table table-head-bg-primary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Description</th>
                                                                <th scope="col">Date Event</th>
                                                                <th scope="col">Location</th>
                                                                <th scope="col">State</th>
                                                                <th scope="col">Photo Studio</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.renderListEventOrganizer()}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <MapView
                            data= {this.state.list_studios}
                            /> */}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
