import './SelectedSong.scss';
import React from 'react';
import { connect } from 'react-redux';

const SelectedSong = ({song}) => {
    if (song === null) {
        return(
            <div className="selected">
                <div className="selected__image-container">
                    <img src="https://bit.ly/32AVTA8"
                    alt="album cover" className="selected__image"></img>
                </div>
                <div className="selected__title-container">
                    <p className="selected__singer">iLOVEFRiDAY</p>
                    <p className="selected__song">Hit Or Miss</p>
                    <span className="selected__duration">3:01</span>
                </div>
            </div>
        );
    } 
    console.log(song);
    return(
        <div className="selected">
            <div className="selected__image-container">
                <img src={song.image}
                alt="album cover" className="selected__image"></img>
            </div>
            <div className="selected__title-container">
                <p className="selected__singer">{song.singer}</p>
                <p className="selected__song">{song.title}</p>
                <span className="selected__duration">{song.duration}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SelectedSong);