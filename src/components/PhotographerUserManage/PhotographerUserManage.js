import React, { Component } from 'react'
import FooterOut from '../template/others/FooterOut'
import HeaderOut from '../template/others/HeaderOut'

export default class PhotographerUserManage extends Component {
    render() {
        return (
            <div class="wrapper overlay-sidebar">
                <HeaderOut />
                <div class="main-panel">
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
                                                    <button className="btn btn-info btn-border btn-round btn-sm mr-2">
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
                                                    <input type="text" className="form-control input-full" id="inlineinput" placeholder="Enter name" />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Email</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="email" className="form-control input-full" id="inlineinput" placeholder="Enter email" />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Phone</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="number" className="form-control input-full" id="inlineinput" minLength="8" placeholder="Enter name" />
                                                </div>
                                            </div>
                                            <div className="form-group form-inline">
                                                <label htmlFor="inlineinput" className="col-md-3 col-form-label">Password</label>
                                                <div className="col-md-9 p-0">
                                                    <input type="password" className="form-control input-full" id="inlineinput" minLength="6" placeholder="Password" />
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