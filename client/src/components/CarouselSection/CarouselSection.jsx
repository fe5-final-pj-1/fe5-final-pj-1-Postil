import React from 'react';
import carouselStyles from './CarouselSection.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function CarouselSection({ sectionTitle, products }) {
    const {
        carousel,
        carouselSlide,
        carouselInfo,
        carouselHeading,
        carouselSlideLink,
        carouselText,
        carouselTextBottom,
    } = carouselStyles;
    const slidesReady = addSlides(products);
    return (
        <section className={carousel}>
            <div className="container">
                <p className={classNames(carouselHeading, 'h2')}>{sectionTitle}</p>
                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    infiniteLoop={true}
                >
                    {slidesReady.map((element, index) => {
                        return <div key={index}>{element}</div>;
                    })}
                </Carousel>
            </div>
        </section>
    );
    // Arr length must be divisible by 3 without a remainder
    function addSlides(arr) {
        const slidesArr = [];
        if (arr.length % 3 !== 0) {
            return [];
        }
        for (let i = 0; i < arr.length; i += 3) {
            slidesArr.push(
                <div className={carouselSlide}>
                    <Link
                        to={`/catalog/${arr[i].itemNo}`}
                        style={{ backgroundImage: `url(${arr[i].imageUrls[0]})` }}
                        className={carouselSlideLink}
                    >
                        {/* <img src={arr[i].imageUrls[0]} alt={`Carousel img ${i + 1}`} /> */}
                        <div className={carouselInfo}>
                            <p className={classNames(carouselText, 'h4--dark')}>{arr[i].name}</p>
                            <p className={classNames(carouselText, carouselTextBottom, 'p--dark')}>
                                {`$${arr[i].currentPrice}`}
                            </p>
                        </div>
                    </Link>
                    <Link
                        to={`/catalog/${arr[i + 1].itemNo}`}
                        style={{ backgroundImage: `url(${arr[i + 1].imageUrls[0]})` }}
                        className={carouselSlideLink}
                    >
                        {/* <img src={arr[i + 1].imageUrls[0]} alt={`Carousel img ${i + 2}`} /> */}
                        <div className={carouselInfo}>
                            <p className={classNames(carouselText, 'h4--dark')}>
                                {arr[i + 1].name}
                            </p>
                            <p
                                className={classNames(carouselText, carouselTextBottom, 'p--dark')}
                            >{`$${arr[i + 1].currentPrice}`}</p>
                        </div>
                    </Link>
                    <Link
                        to={`/catalog/${arr[i + 2].itemNo}`}
                        style={{ backgroundImage: `url(${arr[i + 2].imageUrls[0]})` }}
                        className={carouselSlideLink}
                    >
                        {/* <img src={arr[i + 2].imageUrls[0]} alt={`Carousel img ${i + 3}`} /> */}
                        <div className={carouselInfo}>
                            <p className={classNames(carouselText, 'h4--dark')}>
                                {arr[i + 2].name}
                            </p>
                            <p
                                className={classNames(carouselText, carouselTextBottom, 'p--dark')}
                            >{`$${arr[i + 2].currentPrice}`}</p>
                        </div>
                    </Link>
                </div>,
            );
        }
        return slidesArr;
    }
}

export default CarouselSection;

CarouselSection.propTypes = {
    sectionTitle: PropTypes.string,
    products: PropTypes.array,
};

CarouselSection.defaultProps = {
    sectionTitle: 'Related items',
    products: [],
};
