import React, { Component } from "react";
import PostMaLoneImage from '../../../assets/images/dashboard/realease-song/postmalone.jpg';


class NewRealeases extends Component {

    render() {
        return (
            <li className="row slick-slide slick-current slick-active" style={{ width: "699px" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="media align-items-center col-10 col-md-5">
                        <div className="iq-realese-song ">
                            <a href="/latest-page" ><img src={PostMaLoneImage} className="img-border-radius avatar-60 img-fluid" style={{ objectFit: "cover" }} alt="" /></a>
                        </div>
                        <div className="media-body text-white ml-3">
                            <p className="mb-0 iq-music-title">Post Malone</p>
                            <small>Circles</small>
                        </div>
                    </div>
                    <p className="mb-0 col-md-2 iq-m-time">3:47</p>
                    <p className="mb-0 col-md-2 iq-m-icon"><i className="lar la-star font-size-20"></i></p>
                    <p className="mb-0 col-2 col-md-2"><i className="las la-play-circle font-size-32"></i></p>
                    <div className="iq-card-header-toolbar iq-music-drop d-flex align-items-center col-md-1">
                        <div className="dropdown">
                            <span className="dropdown-toggle text-primary" id="dropdownMenuButton8" data-toggle="dropdown" aria-expanded="false" role="button">
                                <i className="ri-more-2-fill text-primary"></i>
                            </span>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton8">
                                <a className="dropdown-item" href="/#" ><i className="ri-eye-fill mr-2"></i>View</a>
                                <a className="dropdown-item" href="/#" ><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                <a className="dropdown-item" href="/#" ><i className="ri-file-download-fill mr-2"></i>Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default NewRealeases;