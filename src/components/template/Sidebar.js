import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
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
                                    <span>Hizrian<span className="user-level">Administrator</span><span className="caret" /></span>
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
                                            <Link>
                                                <span className="sub-item">Dashboard 1</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <span className="sub-item">Dashboard 2</span>
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
                                    <i class="fa fa-briefcase"/>
                                    <p><small>Photo Studio Management</small></p>
                                    <span className="caret" />
                                </a>
                                <div className="collapse" id="base">
                                    <ul className="nav nav-collapse">
                                        <li>
                                            <a href="../components/avatars.html">
                                                <span className="sub-item">Avatars</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/buttons.html">
                                                <span className="sub-item">Buttons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/gridsystem.html">
                                                <span className="sub-item">Grid System</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/panels.html">
                                                <span className="sub-item">Panels</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/notifications.html">
                                                <span className="sub-item">Notifications</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/sweetalert.html">
                                                <span className="sub-item">Sweet Alert</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/font-awesome-icons.html">
                                                <span className="sub-item">Font Awesome Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/simple-line-icons.html">
                                                <span className="sub-item">Simple Line Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/flaticons.html">
                                                <span className="sub-item">Flaticons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="../components/typography.html">
                                                <span className="sub-item">Typography</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#sidebarLayouts">
                                    <i class="fas fa-images"/>
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
