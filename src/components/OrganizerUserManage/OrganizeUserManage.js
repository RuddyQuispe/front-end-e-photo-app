import React, { Component } from 'react';
import FooterOut from '../template/others/FooterOut';
import HeaderOut from '../template/others/HeaderOut';

export default class OrganizeUserManage extends Component {
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
                                        <h2 className="text-white pb-2 fw-bold">Register Event Organizer User</h2>
                                        <h5 className="text-white op-7 mb-2">E-photo-App Software</h5>
                                    </div>
                                    <div className="ml-md-auto py-2 py-md-0">
                                        <a href="#" className="btn btn-white btn-border btn-round mr-2">Manage</a>
                                        <a href="#" className="btn btn-secondary btn-round">Add Customer</a>
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
                                                <div className="card-title">User Statistics</div>
                                                <div className="card-tools">
                                                    <a href="#" className="btn btn-info btn-border btn-round btn-sm mr-2">
                                                        <span className="btn-label">
                                                            <i className="fa fa-pencil" />
                                                        </span>Export
                                                    </a>
                                                    <a href="#" className="btn btn-info btn-border btn-round btn-sm">
                                                        <span className="btn-label">
                                                            <i className="fa fa-print" />
                                                        </span>Print
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="chart-container" style={{ minHeight: 375 }}>
                                                <canvas id="statisticsChart" />
                                            </div>
                                            <div id="myChartLegend" />
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
