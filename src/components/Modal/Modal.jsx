import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        const { onEscClick } = this.props;
        window.addEventListener('keydown', onEscClick);
    }

    componentWillUnmount() {
        const { onEscClick } = this.props;
        window.removeEventListener('keydown', onEscClick);
    }

    render() {
        const { imageUrl, onModalClick } = this.props;
        return createPortal(
            <div className="Overlay" onClick={onModalClick}>
                <div className="Modal">
                    <img src={imageUrl} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onModalClick: PropTypes.func.isRequired,
};

export default Modal;
