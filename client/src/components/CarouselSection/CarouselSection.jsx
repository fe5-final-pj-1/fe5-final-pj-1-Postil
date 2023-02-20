import React from 'react';
import carouselStyles from './CarouselSection.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselImgOneWebp from './carousel-images/carousel-img-1.webp';
import carouselImgOneJpg from './carousel-images/carousel-img-1.jpg';
import carouselImgTwoWebp from './carousel-images/carousel-img-2.webp';
import carouselImgTwoJpg from './carousel-images/carousel-img-2.jpg';
import carouselImgThreeWebp from './carousel-images/carousel-img-3.webp';
import carouselImgThreeJpg from './carousel-images/carousel-img-3.jpg';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import Button from '../Button';

function CarouselSection() {
    const {
        carouselInfo,
        carouselText,
        carouselTextTop,
        carouselTextBottom,
        carouselBtn,
        carouselHeading,
    } = carouselStyles;
    return (
        <section>
            <div className="container">
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <picture>
                            <source srcSet={carouselImgOneWebp} type="image/webp" />
                            <source srcSet={carouselImgOneJpg} type="image/jpeg" />
                            <img src={carouselImgOneJpg} alt="Carousel img 1" />
                        </picture>
                        <div className={carouselInfo}>
                            <p className={classNames(carouselText, carouselHeading, 'h2 h2--dark')}>
                                Ocean collection
                            </p>
                            <p className={classNames(carouselText, carouselTextTop, 'p p--dark')}>
                                This is the luxury bedding set with absolutely everything in it,
                            </p>
                            <p
                                className={classNames(
                                    carouselText,
                                    carouselTextBottom,
                                    'p p--dark',
                                )}
                            >
                                at a price that won&apos;t keep you up at night.
                            </p>
                            <Button className={carouselBtn} text="Shop new arrivals" />
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={carouselImgTwoWebp} type="image/webp" />
                            <source srcSet={carouselImgTwoJpg} type="image/jpeg" />
                            <img src={carouselImgTwoJpg} alt="Carousel img 2" />
                        </picture>
                        <div className={carouselInfo}>
                            <p
                                className={classNames(
                                    carouselText,
                                    carouselHeading,
                                    carouselTextTop,
                                    'h2 h2--dark',
                                )}
                            >
                                Subscribe now and get 15% off
                            </p>
                            <p
                                className={classNames(
                                    carouselText,
                                    carouselHeading,
                                    carouselTextBottom,
                                    'h2 h2--dark',
                                )}
                            >
                                on your first order
                            </p>
                            <Button className={carouselBtn} text="Shop new arrivals" />
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source srcSet={carouselImgThreeWebp} type="image/webp" />
                            <source srcSet={carouselImgThreeJpg} type="image/jpeg" />
                            <img src={carouselImgThreeJpg} alt="Carousel img 3" />
                        </picture>
                        <div className={carouselInfo}>
                            <p className={classNames(carouselText, carouselTextTop, 'h2 h2--dark')}>
                                Up to 30% off
                            </p>
                            <p
                                className={classNames(
                                    carouselText,
                                    carouselTextBottom,
                                    'h2 h2--dark',
                                )}
                            >
                                on your favourite french linen
                            </p>
                            <Button className={carouselBtn} text="Shop new arrivals" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default CarouselSection;
