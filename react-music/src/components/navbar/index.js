import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CatImage from '../../assets/images/user/sadcat.jpg';

export default class Navbar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="iq-top-navbar">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="collapse navbar-collapse">
                        <ul className="list-unstyled iq-menu-top d-flex justify-content-between mb-0 p-0">
                            <li>
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/latest-page">Latest</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/albums-page">Albums</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto navbar-list">
                            <li className="nav-item nav-icon">
                                <div className="iq-search-bar">
                                    <form action="#" className="searchbox">
                                        <input type="text" className="text search-input" placeholder="Search Here.." />
                                        <a className="search-link" href="/#"><i className="ri-search-line text-black"></i></a>
                                        <a href="/#" className="search-audio"><i className="las la-microphone text-black"></i></a>
                                    </form>
                                </div>
                            </li>

                            <li className="nav-item nav-icon">
                                <a href="/#" className="search-toggle iq-waves-effect text-black rounded">
                                    <span className="ripple rippleEffect"></span>
                                    <i className="las la-cog"></i>
                                    <span className=" dots"></span>
                                </a>
                            </li>

                            <li className="nav-item nav-icon">
                                <a href="/#" className="search-toggle iq-waves-effect text-black rounded">
                                    <i className="lar la-envelope"></i>
                                    <span className="massage-icon dots badge badge-primary">5</span>
                                </a>
                            </li>

                            <li className="nav-item nav-icon">
                                <a href="/#" className="search-toggle iq-waves-effect text-black rounded">
                                    <i className="ri-notification-line block"></i>
                                    <span className="notice-icon dots badge badge-primary">5</span>
                                </a>
                            </li>

                            <li className="line-height pt-3">
                                <a href="/#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                    <img src={CatImage} className="img-fluid rounded-circle" alt="" />
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}