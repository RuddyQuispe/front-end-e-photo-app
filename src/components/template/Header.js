import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

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
                                <div className="nav-link dropdown-toggle">
                                    <h5>{this.state.type}</h5>
                                </div>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <Link className="dropdown-toggle profile-pic" data-toggle="dropdown" aria-expanded="false">
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
                                                    <h4>{this.state.type}</h4>
                                                    <p className="text-muted">{this.state.email}</p>
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
