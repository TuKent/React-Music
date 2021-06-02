import React, { Component } from "react";
import Demo from "../../../assets/images/dashboard/hot-songs/01.png";

class HotSongs extends Component {
    render() {
        return (
            <li class="col-lg-12 w-100 d-inline-block">
                <div class="iq-card iq-card-transparent">
                    <div class="iq-card-body p-0">
                        <div class="media align-items-center">
                            <div class="iq-thumb-hotsong">
                                <div class="iq-music-overlay"></div>
                                <a href="/#"><img src={Demo} class="img-fluid avatar-60" alt="" />
                                </a>
                                <div class="overlay-music-icon">
                                    <a href="music-player.html">
                                        <i class="las la-play-circle font-size-24"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="mb-0 iq-song-title">Tell Me U Luv Me</h6>
                                <small>Kali Uchis</small>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default HotSongs;