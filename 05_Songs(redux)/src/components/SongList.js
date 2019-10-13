import './SongList.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    constructor(props) {
        super(props);
        
        this.setState = {};
    }

    componentDidMount(){};
    componentDidUpdate(){};
    componentWillUnmount(){};

    renderList() {
        return this.props.songs.map( song => {
            return(
                <li className="list__li" key={song.image} onClick={() => this.props.selectSong(song)}>
                    <div className="list__title-container">
                        <p className="list__singer">{song.singer}</p>
                        <p className="list__song">{song.title}</p>
                        <span className="list__duration">{song.duration}</span>
                    </div>
                    <div className="list__image-container">
                        <img className="list__image" 
                        src={song.image}
                        alt="album cover"></img>
                    </div>
                </li>
            );
        });
    };

    render() {
        return (
            <div className="list">
                <ul className="list__ul">
                    {this.renderList()}
                </ul>
                <img className="list__icon" 
                src="https://bit.ly/2Z0OJCL" 
                alt="load more songs"></img>
            </div>
        );
    }
}
/*
const SongList = () => {
    return(

    );
}
*/

const mapStateToProps = (state) => {
    // console.log(state.songs);
    return {songs: state.songs};
};
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
