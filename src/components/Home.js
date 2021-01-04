import React, { Component } from 'react';
import Footer from './template/Footer';
import Header from './template/Header';
import Sidebar from './template/Sidebar';

class Home extends Component {
    render() {
        return (
            <div className="wrapper sidebar_minimize">
                <Header />
                <Sidebar />
                <div className="main-panel">
                    <div className="content">
                        <div className="page-inner">
                            <div className="page-header">
                                <h4 className="page-title">Dashboard E-photo-App</h4>
                                <ul className="breadcrumbs">
                                    <li className="nav-home">
                                        <a href="#">
                                            <i className="flaticon-home" />
                                        </a>
                                    </li>
                                    <li className="separator">
                                        <i className="flaticon-right-arrow" />
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="card card-stats card-primary card-round">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="icon-big text-center">
                                                        <i className="flaticon-users" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-stats">
                                                    <div className="numbers">
                                                        <p className="card-category">Visitors</p>
                                                        <h4 className="card-title">1,294</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="card card-stats card-info card-round">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="icon-big text-center">
                                                        <i className="flaticon-interface-6" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-stats">
                                                    <div className="numbers">
                                                        <p className="card-category">Subscribers</p>
                                                        <h4 className="card-title">1303</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="card card-stats card-success card-round">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="icon-big text-center">
                                                        <i className="flaticon-analytics" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-stats">
                                                    <div className="numbers">
                                                        <p className="card-category">Sales</p>
                                                        <h4 className="card-title">$ 1,345</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="card card-stats card-secondary card-round">
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="icon-big text-center">
                                                        <i className="flaticon-success" />
                                                    </div>
                                                </div>
                                                <div className="col-7 col-stats">
                                                    <div className="numbers">
                                                        <p className="card-category">Order</p>
                                                        <h4 className="card-title">576</h4>
                                                    </div>
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
        );
    }
}

export default Home;