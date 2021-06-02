import React, { Component } from "react";
import PopImage from '../../assets/images/dashboard/audio/demo.png';
import NewRealeases from './components/new-realeases';
import FeaturedAlbums from './components/featured-albums';
import TrendingSongs from './components/trending-songs';
import PopularVietNameseSongs from "./components/popular-vn-songs";
import HotVideoSongs from "./components/hot-video-songs";
// import HotSongs from "./components/hot-songs";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.renderListReleases = this.renderListReleases.bind(this);
        this.renderFeatureAlbums = this.renderFeatureAlbums.bind(this);
        this.renderTrendingSongs = this.renderTrendingSongs.bind(this);
        this.renderPopularVNSongs = this.renderPopularVNSongs.bind(this);
        this.renderHotSongs = this.renderHotSongs.bind(this);
        this.renderHotVideoSongs = this.renderHotVideoSongs.bind(this);
    }
    renderListReleases() {
        let count = [];
        count.length = 6;
        let listReleases = [];
        for (let i = 0; i < count.length; i++) {
            // const element = count[i];
            var element_releases = <NewRealeases key={i.toString()}></NewRealeases>
            listReleases.push(element_releases)
        }
        return listReleases;
    }

    renderFeatureAlbums() {
        let count = [];
        count.length = 6;
        var listFeatured = [];
        for (let i = 0; i < count.length; i++) {
            // const element = listFeature[i];
            var element_albums = <FeaturedAlbums key={i.toString()}></FeaturedAlbums>
            listFeatured.push(element_albums)
        }
        return listFeatured;
    }

    renderTrendingSongs() {
        let count = [];
        count.length = 6;
        var listFeatured = [];
        for (let i = 0; i < count.length; i++) {
            // const element = listFeature[i];
            var element_albums = <TrendingSongs key={i.toString()}></TrendingSongs>
            listFeatured.push(element_albums)
        }
        return listFeatured;
    }

    renderHotSongs(){
        let count = [];
        count.length = 6;
        let list_filter_song = [];
        let list_hot_songs = [];
        for (let i = 0; i < count.length; i++) {
            // const element = count[i];
            let element_song = "1";
            if (list_filter_song.length < 3 ){             
                list_filter_song.push(element_song)
            }
            else {
                list_filter_song = [];
                list_filter_song.push(element_song)
            }
        }
        list_hot_songs.push(list_hot_songs);
        return console.log(list_hot_songs)

    }

    renderPopularVNSongs() {
        let count = [];
        count.length = 12;
        var listFeatured = [];
        for (let i = 0; i < count.length; i++) {
            // const element = listFeature[i];
            var element_albums = <PopularVietNameseSongs key={i.toString()}></PopularVietNameseSongs>
            listFeatured.push(element_albums)
        }
        return listFeatured;
    }


    renderHotVideoSongs(){
        let count = [];
        count.length = 2;
        let list_video = [];
        for (let i = 0; i < count.length; i++) {
            // const element = count[i];
            let element_video = <HotVideoSongs key={i.toString()}></HotVideoSongs>
            list_video.push(element_video);
        }   
        return list_video;
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between border-0">
                                <div className="iq-header-title">
                                    <h4 className="card-title">New Realeases</h4>
                                </div>
                            </div>
                            <div className="iq-card-body iq-realeses-back">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="iq-music-img">
                                            <div className="equalizer">
                                                <span className="bar bar-1"></span>
                                                <span className="bar bar-2"></span>
                                                <span className="bar bar-3"></span>
                                                <span className="bar bar-4"></span>
                                                <span className="bar bar-5"></span>
                                            </div>
                                        </div>

                                        <div className="player1 row">
                                            <div className="details1 music-list col-6 col-sm-6 col-lg-6">
                                                <div className="track-art1" style={{ backgroundImage: `url(${PopImage})` }}></div>
                                                <div>
                                                    <div className="track-name1">Pop Smoke</div>
                                                    <div className="track-artist1">Cascada</div>
                                                </div>
                                            </div>
                                            <div className="buttons1 col-6 col-sm-2 col-lg-3">
                                                <div className="prev-track1" ><i className="fa fa-step-backward fa-2x"></i></div>
                                                <div className="playpause-track1" ><i className="fa fa-play-circle fa-3x"></i></div>
                                                <div className="next-track1"><i className="fa fa-step-forward fa-2x"></i></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <ul className="list-unstyled iq-song-slide realeases-banner slick-vertical slick-initialized slick-slider">
                                            <div className="slick-list draggable" style={{ height: "410px" }}>
                                                <div className="slick-track">
                                                    {/* {this.renderListReleases()} */}
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between align-items-center">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Featured Albums</h4>
                                </div>
                                <div className="slick-aerrow-block">
                                    <button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{ display: "block" }}>Previous</button>
                                    <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }}>Next</button>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="list-unstyled row  feature-album iq-box-hover mb-0 slick-initialized slick-slider">
                                    <div className="slick-list draggable">
                                        {/* {this.renderFeatureAlbums()} */}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Trending Songs</h4>
                                </div>
                                <div className="d-flex align-items-center iq-view">
                                    <b className="mb-0 text-primary"><a href="albums.html">View More <i className="las la-angle-right"></i></a></b>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="list-unstyled row iq-box-hover mb-0">
                                    {/* {this.renderTrendingSongs()} */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Popular Vietnamese Songs</h4>
                                </div>
                                <div className="d-flex align-items-center iq-view">
                                    <b className="mb-0 text-primary"><a href="albums.html">View More <i className="las la-angle-right"></i></a></b>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="list-unstyled row iq-box-hover mb-0">
                                    {/* {this.renderPopularVNSongs()} */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                    <div className="iq-card-header d-flex justify-content-between align-items-center">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Hot Songs</h4>
                                        </div>
                                        <div id="hot-song-slick-arrow" className="slick-aerrow-block">
                                            <button className="slick-prev slick-arrow d-block" aria-label="Previous" type="button">Previous</button>
                                            <button className="slick-next slick-arrow d-block" aria-label="Next" type="button" >Next</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <ul className="list-unstyled row hot-songs mb-0 slick-initialized slick-slider">
                                        <div className="slick-list draggable">
                                            <div className="slick-track">

                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                            <did className="col-lg-6 col-md-12">
                                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                    <div className="iq-card-header d-flex justify-content-between align-items-center">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Hot Video Songs</h4>
                                        </div>
                                        <div className="slick-aerrow-block">
                                            <button className="slick-prev slick-arrow d-block" aria-label="Previous" type="button" >Previous</button>
                                            <button className="slick-next slick-arrow block" aria-label="Next" type="button" >Next</button>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="list-unstyled row iq-box-hover hot-video mb-0 slick-initialized slick-slider">
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    {/* {this.renderHotVideoSongs()} */}
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </did>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;