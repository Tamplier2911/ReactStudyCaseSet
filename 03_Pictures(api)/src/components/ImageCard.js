import './ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { spans: 0};

    //     this.imageRef = React.createRef();
    // }

    // componentDidMount(){
        // console.log(this.imageRef.current.clientHeight);
        // this.imageRef.current.addEventListener('load', this.setSpans);
    // }

    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spans = Math.ceil(height / 150);
    //     this.setState({ spans });
    //     console.log(this.state.spans);
    // }

    // componentDidUpdate(){}
    // componentWillUnmount(){}

    render() {
        const {description, urls} = this.props.image;
        return(
            // <div key={id} className="composition__container">
            // <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img className="composition__image2"
                alt={description} 
                src={urls.regular}
                ref={this.imageRef}/>
            // </div>
        );
    }
}

export default ImageCard;