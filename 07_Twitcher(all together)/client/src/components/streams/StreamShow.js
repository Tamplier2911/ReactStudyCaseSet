import './StreamShow.scss';
import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
    constructor(props) {
        super(props);
        
        this.videoRef = React.createRef();
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchStream(id);
        this.buildPlayer();
    };

    componentDidUpdate(){
        this.buildPlayer();
    };

    componentWillUnmount(){
        this.player.destroy();
    };

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }
        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    };

    renderStream(stream){
        if(!stream) {
            return(
                <div>Loading...</div>
            );
        } else {
            return(
                <div className="stream__presentation--cont2">
                    <div className="stream__presentation--title">{stream.title}</div>
                    <div className="stream__presentation--desc">{stream.description}</div>
                </div>
            );
        }
    };

    render() {
        // console.log(this.props.match.params.id);
        // console.log(this.props.stream);
        // console.log(this.props.state);
        return(
            <div className="stream">
                <div className="stream__picture">
                    <video ref={this.videoRef} controls className="stream__picture--video"/>
                </div>
                <div className="stream__presentation">
                    <div className="stream__presentation--cont1">
                        <img src="https://bit.ly/33WDY7v" alt="" className="stream__presentation--logo"></img>
                    </div>
                    {this.renderStream(this.props.stream)}
                    <div className="stream__presentation--cont3">
                        <button className="stream__presentation--sub">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream } )(StreamShow);