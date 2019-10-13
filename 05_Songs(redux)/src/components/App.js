import './App.scss';
import React from 'react';
import SongList from './SongList';
import SelectedSong from './SelectedSong';

const App = () => {
    return(
        <div className="appContainer">
            <div className="appContainer__left">
                <SongList/>
            </div>
            <div className="appContainer__right">
                <SelectedSong/>
            </div>
        </div>
    );
}


/*
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    componentDidMount(){}
    componentDidUpdate(){}
    componentWillUnmount(){}

    render(){
        return(
            <h1>Hello, React-Redux!</h1>
        );
    }
}
*/
export default App;