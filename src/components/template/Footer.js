import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul className="nav">
                            <li className="nav-item">
                                <label className="nav-link">E-Photo-App</label>
                            </li>
                            <li className="nav-item">
                                <label className="nav-link">Repository</label>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright ml-auto">
                        2021 January, made with <i className="fa fa-heart heart text-danger" /> by <a href="https://www.themekita.com">Ruddy Quispe</a>
                    </div>
                </div>
            </footer>
        )
    }
}
