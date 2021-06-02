import React, { Component } from "react";


class HotVideoSongs extends Component {
    render() {
        return (
            <li className="col-lg-6 slick-slide slick-cloned" aria-hidden="true">
                <div className="iq-card mb-lg-0">
                    <div className="iq-card-body p-0">
                        <div className="iq-thumb">
                            <iframe src="https://www.youtube.com/embed/7xoM0ONcPBU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                        <div className="feature-list text-center">
                            <h6 className="font-weight-600  mb-0"> Cát Chi FREESTYLE</h6>
                            <p className="mb-0">85.298 Views</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default HotVideoSongs;