import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {

    constructor(){
        super();
        let jsonUser = JSON.parse(sessionStorage.getItem("USER_AUTH"));
        this.state = {
            email: jsonUser.email,
            type: jsonUser.type
        }
    }

    render() {
        return (
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <div className="user">
                            <div className="avatar-sm float-left mr-2">
                                <img src="./assets/img/mlane.jpg" alt="..." className="avatar-img rounded-circle" />
                            </div>
                            <div className="info">
                                <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                    <span>{this.state.email}<span className="user-level">{this.state.type}</span><span className="caret" /></span>
                                </a>
                                <div className="clearfix" />
                                <div className="collapse in" id="collapseExample">
                                    <ul className="nav">
                                        <li>
                                            <Link>
                                                <span className="link-collapse">My Profile</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-primary">
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                    <i className="fas fa-users" />
                                    <p>User Management</p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="dashboard">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <Link to='/photographer_user_list'>
                                                <span className="sub-item">Photographer User</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/event_organizer_user_list'>
                                                <span className="sub-item">Organizer Event User</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-section">
                                <span className="sidebar-mini-icon">
                                    <i className="fa fa-ellipsis-h" />
                                </span>
                                <h4 className="text-section">Services</h4>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#base">
                                    <i className="fa fa-briefcase"/>
                                    <p><small>Photo Studio</small></p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="base">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <Link to="/photo_studio_manage">
                                                <span className="sub-item">Photo Studio Manage</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={this.state.type==="Organizer User"? "/event_manage_organizer" : "/event_manage_studio"}>
                                                <span className="sub-item">Event Manage</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#sidebarLayouts">
                                    <i className="fas fa-images"/>
                                    <p><small>Photography Management</small></p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="sidebarLayouts">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="../sidebar-style-1.html">
                                                <span className="sub-item">Sidebar Style 1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../overlay-sidebar.html">
                                                <span className="sub-item">Overlay Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../compact-sidebar.html">
                                                <span className="sub-item">Compact Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../static-sidebar.html">
                                                <span className="sub-item">Static Sidebar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../icon-menu.html">
                                                <span className="sub-item">Icon Menu</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
