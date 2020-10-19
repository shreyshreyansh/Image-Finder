import React from 'react'

const ImageList = (props) => {
    const images = props.images.map(image => {
        return (
            <img
            src = {image.urls.regular}
            alt = "Hi"
        />
        );
    });
    return <div style={{marginLeft: '25px'}}>{images}</div>;
}

export default ImageList
