import React, { Component } from "react";
import Demo from "../../../assets/images/dashboard/feature-album/postmalone.jpg";


class FeatureAlbums extends Component {

   render() {
      return (
         <li className="col-lg-2 iq-music-box slick-slide slick-cloned" data-slick-index="-6" aria-hidden="true" style={{ width: "200px" }} >
            <div className="iq-card mb-0">
               <div className="iq-card-body p-0">
                  <div className="iq-thumb">
                     <div className="iq-music-overlay"></div>
                     <a href="/" >
                        <img src={Demo} className="img-border-radius image-albums" alt="" />
                     </a>
                     <div className="overlay-music-icon">
                        <a href="/" >
                           <i className="las la-play-circle"></i>
                        </a>
                     </div>
                  </div>
                  <div className="feature-list text-center">
                     <h6 className="font-weight-600 mb-0">Future Featuring</h6>
                     <p className="mb-0">Sophie Ellis</p>
                  </div>
               </div>
            </div>
         </li>
      )
   }
}

export default FeatureAlbums;