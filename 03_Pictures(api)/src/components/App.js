import './App.css';
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageList2 from './ImageList2';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {images: []};
    }

     onSearchSubmit = async (term) => {
        const response = await unsplash.get(`search/photos`, {params: { query: term, per_page: 20 }});

        this.setState({images: response.data.results});
    }

    componentDidMount(){}
    componentDidUpdate(){}
    componentWillUnmount(){}

    render() {
        return(
            <div className="container">
                <div className="container__wrapper">
                    <div className="container__top">
                        <SearchBar 
                        onSubmit={this.onSearchSubmit}/>
                    </div>
                    <div className="container__bottom">
                        <div className="bot1">
                            {/* <div>Found: {this.state.images.length} images</div> */}
                            <ImageList images={this.state.images}/>
                        </div>
                        <div className="bot2">
                            <ImageList2 images={this.state.images}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const App = () => {
//     return(
//         <div className="container">
//             <div className="container__wrapper">
//                 <div className="container__top">
//                     <SearchBar />
//                 </div>
//                 <div className="container__bottom">
//                     <div className="bot1">
//                         <div>I AM BOTTOM PART</div>
//                     </div>
//                     <div className="bot2">
//                         <div>I AM BOTTOM PART TOO</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default App;