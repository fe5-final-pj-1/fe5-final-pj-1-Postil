import React, { useState, useEffect } from 'react';
import carouselStyles from './CarouselMainSection.module.scss';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import getAllSlides from 'api/getAllSlides';
import { useDispatch } from 'react-redux';
import { filtersResetAll } from 'store/filtersSlice/filtersSlice';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';

function CarouselMainSection() {
    const dispatch = useDispatch();
    const [promotions, setPromotions] = useState([]);
    const {
        carousel,
        carouselInfo,
        carouselText,
        carouselTextDescription,
        carouselLink,
        carouselHeading,
    } = carouselStyles;
    useEffect(() => {
        getAllSlides().then((slides) => {
            setPromotions(slides.data);
        });
    }, []);
    const onClickHandler = () => {
        dispatch(filtersResetAll());
    };
    const getLink = (promotion) => {
        if (promotion.product) {
            return `/catalog/${promotion.product._id}`;
        } else if (promotion.categoryName) {
            return `/catalog/filter?categories=${promotion.categoryName}`;
        } else {
            return `/catalog`;
        }
    };
    const sortPromotions = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    };
    return (
        <section className={carousel}>
            <div className="container">
                <Carousel showThumbs={false} showStatus={false} emulateTouch={true}>
                    {promotions.sort(sortPromotions).map((promotion) => {
                        let linkStr = getLink(promotion);
                        return (
                            <div key={promotion.customId}>
                                <img
                                    src={promotion.imageUrl}
                                    alt={`Carousel img ${promotion.customId}`}
                                />
                                <div className={carouselInfo}>
                                    <p
                                        className={classNames(
                                            carouselText,
                                            carouselHeading,
                                            'h2 h2--dark',
                                        )}
                                    >
                                        {promotion.title}
                                    </p>
                                    <p
                                        className={classNames(
                                            carouselText,
                                            carouselTextDescription,
                                            'p p--dark',
                                        )}
                                    >
                                        {promotion.description}
                                    </p>
                                    <Link
                                        to={linkStr}
                                        className={carouselLink}
                                        onClick={onClickHandler}
                                    >
                                        Watch now
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
}

export default CarouselMainSection;
