import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, largeImageURL, onThumbClick }) => {
    return (
        <li className="ImageGalleryItem">
            <img
                src={src}
                alt={alt}
                className="ImageGalleryItem__image"
                data-largeimageurl={largeImageURL}
                onClick={onThumbClick}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onThumbClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
