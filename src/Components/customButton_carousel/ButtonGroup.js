import React from 'react';
import './buttonGroup.css'
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;

    const isEnd = currentSlide === totalItems - slidesToShow;

    return (
        <div className="carousel-button-group container" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <button
                className="custom-left-arrow"
                onClick={() => {
                    if (currentSlide === 0) {
                        next()
                    }
                    else {
                        previous()
                    }
                }}

            >
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
                className="custom-right-arrow"
                onClick={() => {
                    if (isEnd) {
                        previous()
                    }
                    else {
                        next()
                    }
                }}

            >
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default ButtonGroup;