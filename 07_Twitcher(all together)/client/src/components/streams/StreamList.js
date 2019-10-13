import './StreamList.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import history from '../../history';

class StreamList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount(){
        this.props.fetchStreams();
    };
    componentDidUpdate(){};
    componentWillUnmount(){};

    renderAdmin(stream) {
        if (this.props.currentUserId === stream.userId) {
            return(
                <div className="stream__description--buttons" onClick={(e) => e.stopPropagation()}>
                    <Link to={`/streams/edit/${stream.id}`} className="btn-service btn-edit link">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="btn-service btn-delete link">Delete</Link>
                </div>
            );
        } 
    }

    renderCreate() {
        if (this.props.signedIn) {
            return <Link className="streams__create--link" to="/streams/new">
                Create Stream
            </Link>;
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            const watching = Math.ceil(Math.random() * 26);
            const logo = ["https://bit.ly/2L6OIaX", 
            "https://bit.ly/3247HJX", 
            "https://bit.ly/33WDY7v", 
            "https://bit.ly/2KT1lHw", 
            "https://bit.ly/2KW4g2g", 
            "https://bit.ly/33ZdtOI", 
            "https://bit.ly/2PeAnyu", 
            "https://bit.ly/33UP3pz"].sort(() => 0.5 - Math.random()).slice(0, 1);
            const image = ["https://bit.ly/2zmxbpG", 
            "https://bit.ly/2PnRRZ0", 
            "https://bit.ly/2PcFuz6",
            "https://bit.ly/30yYVDx", 
            "https://bit.ly/2ZrP2Kr", 
            "https://bit.ly/2zqhaPj",
            "https://bit.ly/2L6V3mL", 
            "https://bit.ly/2MD6upc"].sort(() => 0.5 - Math.random()).slice(0, 1);
            const game = ["League of Legends", "Minecraft", 
            "Counter-Strike:GO", "Hearthstone",
            "Fortnite", "Overwatch", "PUBG", "Dota 2", 
            "Apex Legends", "World of Warcraft"].sort(() => 0.5 - Math.random()).slice(0, 1);
            return(
                // if you want redirection only from name => remove onClick event from main container!!!
                <div className="streams__stream" key={stream.id} onClick={() => history.push(`/streams/${stream.id}`)}>
                    <div className="stream__label">
                        <img src={image} alt="Stream view" className="stream__label--image"></img>
                        <div className="stream__label--text">Streaming</div>
                        <div className="stream__label--watching">{watching}k watching</div>
                    </div>
                    <div className="stream__description">
                        <div className="stream__description--label">
                            <img src={logo} alt="Streamer logo" className="stream__description--image"></img>
                        </div>
                        <div className="stream__description--text">
                            {/* ELSE REMOVE LINK COMPONENT */}
                            <Link to={`streams/${stream.id}`} className="stream__description--name">
                                <div className="stream__description--name">{stream.title}</div>
                            </Link>
                            <div className="stream__description--desc">{stream.description}</div>
                            <div className="stream__description--game">{game}</div>
                            <button className="stream__description--lang btn-service">language</button>
                        </div>
                        {this.renderAdmin(stream)}
                    </div>
                </div>
            );
        });
    }

    render(){
        // console.log(this.props.streams);
        // console.log(this.props.signedIn);
        return(
            <div className="streams">
                <div className="streams__create">
                    <div className="streams__create--recomended">Featured streams:</div>
                    {this.renderCreate()}
                </div>
                {this.renderList()} 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        signedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);