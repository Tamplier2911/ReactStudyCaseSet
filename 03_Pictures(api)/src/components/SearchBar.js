import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: '',
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    componentDidMount(){};

    componentDidUpdate(){};

    componentWillUnmount(){};

    render() {
        return(
            <div className="searchBar">
                <form className="searchBar__form"
                // onSubmit={this.onFormSubmit.bind(this)}>
                // onSubmit={(e) => this.onFormSubmit(e)}>
                onSubmit={this.onFormSubmit}>
                    <input 
                    className="searchBar__input" 
                    type="text" 
                    placeholder="Image search..."
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})}>
                    </input>
                </form>
            </div>
        );
    };
}

export default SearchBar;
