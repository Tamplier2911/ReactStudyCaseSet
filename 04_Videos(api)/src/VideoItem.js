import './VideoItem.scss';
import React from 'react';

/*
class VideoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return(
            <a className="video__item" href="/">
                <img className="video__item--thumb" src="https://bit.ly/2Jqd8MO" alt="preview"></img>
                <div>
                    <h4 className="video__item--title">Video Title</h4>
                    <p className="video__item--desc">Video Description...</p>
                </div>
            </a>
        );
    };
}
*/

const VideoItem = ({video, onVideoSelect}) => {
    const title = video.snippet.title.split(' ').length > 3 ? video.snippet.title.split(' ').splice(0, 3).join(' ') + '...': video.snippet.title + '...' ;
    // const desc = video.snippet.description.split(' ').length > 3 ? video.snippet.description.split(' ').splice(0, 4).join(' ') + '...' : video.snippet.description ;
    return(
        <div className="video__item" onClick={() => onVideoSelect(video)}>
            <img className="video__item--thumb" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}></img>
            <div>
                <h4 className="video__item--title">{title}</h4>
                {/* <p className="video__item--desc">{desc}</p> */}
            </div>
        </div>
    );
}
export default VideoItem;