import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config'
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class PhotoStudioManage extends Component {
    

    state = {
        name : "",
        address: ""
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }

    onChangeAddress = (e) => {
        this.setState({address: e.target.value});
    }

    handleOnClick = async () => {
        const response = await axios.post(`${config.host}/api/photo_studio`, this.state);
        alert(response.data.message);
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
                                <h4 className="page-title">Photo Studio Manage</h4>
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
                                        Photo Studio Manage
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Form Elements</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-4">
                                                    <div className="card-title">Register</div>
                                                    <div className="form-group">
                                                        <label htmlFor="email2">Name Studio</label>
                                                        <input type="text" className="form-control" placeholder="Enter photo studio name" onChange={this.onChangeName} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="password">Address</label>
                                                        <input type="text" className="form-control" placeholder="Address photo studio (latitude, logitude)" onChange={this.onChangeAddress}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-success" onClick={this.handleOnClick}>Submit</button>
                                                        <button className="btn btn-danger">Back</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-8">
                                                    <div className="card-title">List Photo Studio</div>
                                                    <table>

                                                    </table>
                                                </div>
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
