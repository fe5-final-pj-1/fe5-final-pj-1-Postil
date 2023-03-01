import React from 'react';
import carouselStyles from './ProductCarousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

function ProductCarousel({ images }) {
    const { carousel } = carouselStyles;
    return (
        <div className={carousel}>
            <Carousel
                showThumbs={true}
                showIndicators={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                <div>
                    <img src={images[0]} alt="Carousel img 3" />
                </div>
                <div>
                    <img src={images[1]} alt="Carousel img 3" />
                </div>
                <div>
                    <img src={images[2]} alt="Carousel img 3" />
                </div>
            </Carousel>
        </div>
    );
}

export default ProductCarousel;

ProductCarousel.propTypes = {
    images: PropTypes.array,
};
ProductCarousel.defaultProps = {
    images: [],
};
