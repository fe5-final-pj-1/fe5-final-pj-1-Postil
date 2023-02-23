import React from 'react';
import carouselStyles from './ProductCarousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ProductCarousel() {
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
                    <img
                        src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676975743/Linens/SliderMin/Slide-1_ibxfsb.jpg"
                        alt="Carousel img 3"
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676975723/Linens/SliderMin/Slide-2_xxi6f3.jpg"
                        alt="Carousel img 3"
                    />
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676975723/Linens/SliderMin/Slide-3_yeoisk.jpg"
                        alt="Carousel img 3"
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default ProductCarousel;
