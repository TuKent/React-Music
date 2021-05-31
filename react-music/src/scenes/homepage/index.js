import React, { Component } from "react";


class HomePage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between border-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title">New Realeases</h4>
                                </div>
                            </div>
                            <div className="iq-card-body  iq-realeses-back"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;