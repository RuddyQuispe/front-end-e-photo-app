import React, { Component } from 'react'

export default class HeaderOut extends Component {
    render() {
        return (
            <div className="main-header">
                <div className="logo-header" data-background-color="blue2">
                    <div className="logo">
                        <img src="./assets/img/logo.svg" alt="navbar brand" className="navbar-brand" />
                    </div>
                </div>
                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                    <div className="container-fluid position-absolute top-0 start-0"/>
                </nav>
            </div>

        )
    }
}
