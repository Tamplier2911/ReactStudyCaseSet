import './VideoDetail.scss';
import React from 'react';

/*

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="video">
                <div className="video__frame">
                    <img className="video__sample" src="https://bit.ly/2Jqd8MO" alt="sample"></img>
                </div>
                <div className="video__details">
                    <h2 className="video__details--title">Video Title</h2>
                    <p className="video__details--desc">Description....</p>
                </div>
            </div>
        )
    }
}

*/

const VideoDetail = ({video}) => {

    const title = video ? video.snippet.title : 'Please, search for a Video!';
    const desc = video ? video.snippet.description : 'Enjoy relaxing music meanwhile...';
    const videoSrc = video ? 'https://www.youtube.com/embed/' + video.id.videoId : 'https://www.youtube.com/embed/jhmarH8VkJg';
    console.log(video);

    return(
        <div className="video">
            <div className="video__frame">
            <iframe className="video__sample" src={videoSrc} title="video-player"
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            border="0" cellSpacing="0" allowFullScreen></iframe>
            </div>
            <div className="video__details">
                <h2 className="video__details--title">{title}</h2>
                <p className="video__details--desc">{desc}</p>
            </div>
        </div>
    );
}

// .replace(/["']/g, "")

export default VideoDetail;