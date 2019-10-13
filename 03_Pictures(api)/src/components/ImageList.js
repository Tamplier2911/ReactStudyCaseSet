import './ImageList.css';
import  React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map(({description, id, urls}) => {
        return <div key={id} className="composition__container">
        <img className="composition__image" src={urls.regular} alt={description}></img>
    </div>
    });
    return (
        // <div>{images}</div>
        <div className="composition">
            {images}
        </div>
    );
};

export default ImageList;