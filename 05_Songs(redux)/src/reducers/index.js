import { combineReducers } from 'redux';

//Reducers
const songsReducer = () => {
    return [
        {
            singer: 'Vashti Bunyan',
            title: 'Train Song',
            duration: '2:15',
            image: 'https://bit.ly/2M1uukO'
        },
        {
            singer: 'Ruth B.',
            title: 'Lost Boy',
            duration: '4:13',
            image: 'https://bit.ly/2JDCcQs'
        },
        {
            singer: 'Foster The People',
            title: 'Pumped up Kicks',
            duration: '4:12',
            image: 'https://bit.ly/2XTOL35'
        },
        {
            singer: 'iLOVEFRiDAY',
            title: 'Hit Or Miss',
            duration: '3:01',
            image: 'https://bit.ly/32AVTA8'
        },
        {
            singer: 'Lou Reed',
            title: 'Perfect Day',
            duration: '3:44',
            image: 'https://bit.ly/32Esvci'
        },
        {
            singer: 'Don McLean',
            title: 'American Pie',
            duration: '8:32',
            image: 'https://bit.ly/2LwsuBI'
        }
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});