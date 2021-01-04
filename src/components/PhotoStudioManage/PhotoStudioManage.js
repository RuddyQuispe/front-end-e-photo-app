import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config/config'
import Footer from '../template/Footer'
import Header from '../template/Header'
import Sidebar from '../template/Sidebar'

export default class PhotoStudioManage extends Component {

    constructor() {
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            name: "",
            address: "",
            list_studios: [],
            list_social_network: [],
            list_social_selected: [],
            social_selected: 1,
            social_link: "",
            token: jsonUser.token
        };
    }

    async componentDidMount() {
        await this.makeListPhotoStudio();
    }

    async makeListPhotoStudio() {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'get',
            url: `${config.host}/api/photo_studio`
        });
        this.setState({ list_studios: response.data.list_photo_studio, list_social_network: response.data.list_social_network });
    }

    onChangeName = (e) => this.setState({ name: e.target.value });

    onChangeAddress = (e) => this.setState({ address: e.target.value })

    onChangeSocialLink = (e) => this.setState({social_link: e.target.value});

    onChangeSocialTypeSelected = (e) => this.setState({social_selected: e.target.value});

    handleAddSocialAcumulated = (e) => {
        e.preventDefault();
        let {social_link, social_selected} = this.state;
        const listSocialAcum = this.state.list_social_selected;
        listSocialAcum.push({
            id: social_selected,
            description: social_link
        });
        this.setState({list_social_selected : listSocialAcum});
    }
    
    handleCreatePhotoStudio = async () => {
        const response = await axios({
            headers: { 'x-access-token': this.state.token },
            method: 'post',
            url: `${config.host}/api/photo_studio`,
            data: {
                name: this.state.name, 
                address: this.state.address, 
                list_social_network: this.state.list_social_selected
            }
        })
        alert(response.data.message);
        await this.makeListPhotoStudio();
    }

    renderOptionsSocialRed() {
        return this.state.list_social_network.map(social_red => {
            return (
                <option key={social_red.id} value={social_red.id}>{social_red.description}</option>
            );
        })
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

    renderListPhotoStudio() {
        return this.state.list_studios.map(photo_studio => {
            return (
                <tr key={photo_studio.id}>
                    <td>{photo_studio.id}</td>
                    <td>{photo_studio.name}</td>
                    <td>{this.renderSocialLink(photo_studio.array)}</td>
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
                                                        <input type="text" className="form-control" placeholder="Address photo studio (latitude, logitude)" onChange={this.onChangeAddress} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Red Social</label>
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={this.onChangeSocialLink} placeholder="https://fb.com/..."/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <select className="form-control" onChange={this.onChangeSocialTypeSelected}>
                                                                {this.renderOptionsSocialRed()}
                                                            </select>
                                                            <button className="btn btn-secondary" onClick={this.handleAddSocialAcumulated}>Upload</button>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-success" onClick={this.handleCreatePhotoStudio}>Submit</button>
                                                        <button className="btn btn-danger">Back</button>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-8">
                                                    <div className="card-title">List Photo Studio</div>
                                                    <table className="table table-head-bg-default">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Red Social</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {this.renderListPhotoStudio()}
                                                        </tbody>
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
