import React, { Component } from "react";
import PostMalone from "../../../assets/images/dashboard/tranding-song/postmalone.jpg";

class TrendingSongs extends Component {
   render() {
      return (
         <li className="col-xl-2 col-lg-3 col-md-4 iq-music-box">
            <div className="iq-card">
               <div className="iq-card-body p-0">
                  <div className="iq-thumb">
                     <div className="iq-music-overlay"></div>
                     <a href="/#">
                        <img src={PostMalone} className="img-border-radius image-songs" alt="" />
                     </a>
                     <div className="overlay-music-icon">
                        <a href="/#">
                           <i className="las la-play-circle"></i>
                        </a>
                     </div>
                  </div>
                  <div className="feature-list text-center">
                     <h6 className="font-weight-600  mb-0">Life Is Good</h6>
                     <p className="mb-0">Billie Eilish</p>
                  </div>
               </div>
            </div>
         </li>
      )
   }
}

export default TrendingSongs;