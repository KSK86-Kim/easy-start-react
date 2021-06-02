import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallety extends Component {
    render() {
        const { images, onThumbClick, children } = this.props;
        return (
            <ul className="ImageGallery">
                {images.map(imageObj => {
                    return (
                        <ImageGalleryItem
                            key={imageObj.id}
                            largeImageURL={imageObj.largeImageURL}
                            src={imageObj.webformatURL}
                            alt={imageObj.tags}
                            onThumbClick={onThumbClick}
                        />
                    );
                })}
                {children}
            </ul>
        );
    }
}

ImageGallety.propTypes = {
    images: PropTypes.array.isRequired,
    onThumbClick: PropTypes.func.isRequired,
};

export default ImageGallety;
