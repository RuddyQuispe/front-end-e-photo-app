import React, { Component } from 'react'

export default class FooterOut extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul className="nav">
                            <li className="nav-item">
                                <div className="nav-link">ThemeKita</div>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright ml-auto">
                        2018, made with <i className="fa fa-heart heart text-danger" /> by ThemeKita
                    </div>
                </div>
            </footer>

        )
    }
}
