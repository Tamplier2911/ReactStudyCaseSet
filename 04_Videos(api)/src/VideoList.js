import './VideoList.scss';
import React from 'react';
import VideoItem from './VideoItem';

/*
class VideoList extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <div className="video__list">
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
                <VideoItem/>
            </div>
        );
    };
}
*/

const VideoList = ({videos, onVideoSelect}) => {
    //props.videos array of video objects
    const renderedList = videos.map( video => {
        return(
            <VideoItem key={video.etag}
            video={video}
            onVideoSelect={onVideoSelect}/>
        )
    });
    return(
        <div className="video__list">
            {renderedList}
        </div>
    );
};

export default VideoList;