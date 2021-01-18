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
                        </ul>
                    </div>
                </nav>
                {/* End Navbar */}
            </div>
        )
    }
}
