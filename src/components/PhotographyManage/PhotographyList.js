import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config';
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class PhotographyList extends Component {

    constructor(){
        super();
        this.state ={
            list_photos : []
        }
    }

    async getListPhotographies(){
        const response = await axios({
            url: `${config.host}/api/photography_manage/list_photographies/${this.props.match.params.code_event}`,
            method: 'get',
        });
        this.setState({
            list_photos: response.data.list_photos
        });
        console.log(this.state.list_photos);
    }

    async componentDidMount(){
        await this.getListPhotographies();
    }

    renderListPhotos() {
        return this.state.list_photos.map(photo => {
            return (
                <div className="avatar avatar-xxl">
                    <img src={`https://bucket-e-photo-app-sw1.s3.amazonaws.com/${photo.name}`} alt={photo.name} className="avatar-img rounded-circle" />
                </div>
            );
        })
    }

    render() {
        console.log(this.props.match.params.code_event);
        return (
            <div className="wrapper sidebar_minimize">
                <Header />
                <Sidebar />
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Photos Event Manage</h4>
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
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                    <li className="nav-item">
                                        Photos Event Manage
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Photography <i className="fas fa-images"></i></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                {this.renderListPhotos()}
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
