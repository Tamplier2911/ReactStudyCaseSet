import './App.scss';
import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from './apis/youtube';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount(){
        this.onTermSubmit('lofi hip hop');
    };
    componentDidUpdate(){};
    componentWillUnmount(){};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items,
        selectedVideo: response.data.items[0]});
        // console.log(this.state.videos);
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        // console.log('From the App', video);
        // console.log(this.state.selectedVideo)
    }
    
    render() {
        return(
            <div className="container">
                <header className="header">
                    <SearchBar
                    onFormSubmit={this.onTermSubmit}/>
                </header>
                <div className="content">
                    <main className="main">
                        <VideoDetail
                        video={this.state.selectedVideo}/>
                    </main>
                    <nav className="navigation">
                        <VideoList
                        videos={this.state.videos}
                        onVideoSelect={this.onVideoSelect}/>
                    </nav>
                </div>
            </div>
        );
    };
};

export default App;