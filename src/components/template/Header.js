import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="logo-header" data-background-color="blue">
                    <div className="logo">
                        <img src="./assets/img/logo.svg" alt="navbar brand" className="navbar-brand" />
                    </div>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="icon-menu" />
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="icon-menu" />
                        </button>
                    </div>
                </div>
                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                    <div className="container-fluid">
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item dropdown hidden-caret">
                                <Link className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-bell" />
                                    <span className="notification">4</span>
                                </Link>
                                <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                    <li>
                                        <div className="dropdown-title">You have 4 new notification</div>
                                    </li>
                                    <li>
                                        <div className="notif-center">
                                            <Link>
                                                <div className="notif-icon notif-primary">
                                                    <i className="fa fa-user-plus" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">New user registered</span>
                                                    <span className="time">5 minutes ago</span>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className="notif-icon notif-success"> <i className="fa fa-comment" /> </div>
                                                <div className="notif-content">
                                                    <span className="block">Rahmad commented on Admin</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className="notif-img">
                                                    <img src="../../assets/img/profile2.jpg" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">Reza send messages to you</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </Link>
                                            <Link>
                                                <div className="notif-icon notif-danger"> <i className="fa fa-heart" /> </div>
                                                <div className="notif-content">
                                                    <span className="block">Farrah liked Admin</span>
                                                    <span className="time">17 minutes ago</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="see-all" href="javascript:void(0);">
                                            See all notifications<i className="fa fa-angle-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <Link className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                                    <div className="avatar-sm">
                                        <img src="./assets/img/mlane.jpg" alt="..." className="avatar-img rounded-circle" />
                                    </div>
                                </Link>
                                <ul className="dropdown-menu dropdown-user animated fadeIn">
                                    <div className="dropdown-user-scroll scrollbar-outer">
                                        <li>
                                            <div className="user-box">
                                                <div className="avatar-lg"><img src="./assets/img/mlane.jpg" alt="image profile" className="avatar-img rounded" /></div>
                                                <div className="u-text">
                                                    <h4>User Photograph</h4>
                                                    <p className="text-muted">photographer@gmail.com</p>
                                                    <Link className="btn btn-xs btn-secondary btn-sm">
                                                        View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider" />
                                            <Link className="dropdown-item">My Profile</Link>
                                            <div className="dropdown-divider" />
                                            <button className="dropdown-item" onClick={()=> alert("Logout")}>Logout</button>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* End Navbar */}
            </div>
        )
    }
}
