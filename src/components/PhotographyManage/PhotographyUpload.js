import React, { Component } from 'react'
import config from '../../config/config';
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'
import DropzoneComponent from 'react-dropzone-component';
import 'react-dropzone-component/styles/filepicker.css';
import axios from 'axios';

export default class PhotographyUpload extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            list_photos: [],
            price: 0.0,
            email: jsonUser.email
        };
    }

    savePhoto = (fileName) => {
        let listPhotosPartial = this.state.list_photos;
        listPhotosPartial.push(fileName);
        this.setState({
            list_photos: listPhotosPartial
        });
    }

    componentConfig = {
        iconFiletypes: ['.jpg', '.png'],
        addRemoveLinks: false,
        showFiletypeIcon: true,
        postUrl: 'no-url'
    };

    djsConfig = { autoProcessQueue: false }
    eventHandlers = {
        addedfile: async (file) => {
            console.log(file);
            let formData = new FormData();
            console.log("sending");
            console.log(file);
            formData.append('photos', file);
            console.log(formData);
            const response = await axios({
                url: `${config.host}/upload`,
                headers: { 'content-type': 'multipart/form-data' },
                method: 'post',
                data: formData
            });
            await this.savePhoto(response.data.list_photos_name);
            alert(`listen file: ${response.data.list_photos_name} for upload`);
            console.log(this.state.list_photos);
        }
    }

    onChangePrice = (e) => {
        this.setState({
            price: e.target.value
        });
    }

    handleUploadPhoto = async (e) => {
        e.preventDefault();
        console.log("sending");
        const response = await axios({
            url: `${config.host}/api/photography_manage/upload_photography`,
            method: 'post',
            data: {
                image_name_list: this.state.list_photos,
                price: this.state.price,
                code_event: this.props.match.params.code_event,
                email_user_photographer: this.state.email
            }
        });
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
                                <h4 className="page-title">Photography List: Event # {this.props.match.params.code_event}</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <i className="flaticon-home" />
                                    </li>
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                    <li className="nav-item">
                                        Photography Manage
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="ml md-auto py-md-0 btn btn-success" onClick={this.handleUploadPhoto}>
                                                <i class="fa fa-upload"></i>
                                                <h6>Upload Photos</h6>
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Price for each photo</label>
                                                <input type="number" className="form-control" min={1} placeholder="price" onChange={this.onChangePrice} />
                                            </div>
                                            <div className="dropzone dropzone-container">
                                                <DropzoneComponent config={this.componentConfig}
                                                    eventHandlers={this.eventHandlers}
                                                    djsConfig={this.djsConfig} />
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
