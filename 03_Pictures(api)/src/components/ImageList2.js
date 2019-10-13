import './ImageList2.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList2 = (props) => {
    const images = props.images.map((image) => {
        return(
        <div key={image.id} className="composition__container2">
            <ImageCard className="composition__image2" image={image}/>
        </div>
        );
    });
    return(
        <div className="composition2">
            {images}
        </div>
    );
}

export default ImageList2;

