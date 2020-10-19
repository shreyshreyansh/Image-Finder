import React from 'react'

const ImageList = (props) => {
    const images = props.images.map(image => {
        return (
            <img
            key = {image.id}
            src = {image.urls.regular}
            alt = {image.alt_description}
        />
        );
    });
    return <div style={{marginLeft: '25px'}}>{images}</div>;
}

export default ImageList
