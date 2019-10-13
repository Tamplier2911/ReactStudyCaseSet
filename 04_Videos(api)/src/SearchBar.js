import "./SearchBar.scss";
import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();

        // TODO: Make sure we call callback from parent component
        this.props.onFormSubmit(this.state.term);
    };

    onInputChange = (e) => {
        this.setState({term: e.target.value});
    };

    componentDidUpdate(){};

    render(){
        return(
            <form className="form" 
            onSubmit={this.onFormSubmit}>

                <input className="form__input" type="text"
                onChange={this.onInputChange}
                value={this.state.term}></input>

                <a className="form__submit" href="/" 
                onClick={this.onFormSubmit}>
                    <img className="form__image" 
                    src="https://bit.ly/2XRZXfz" 
                    alt="loupe"></img>
                </a>
                
            </form>
        )
    };
}

export default SearchBar;