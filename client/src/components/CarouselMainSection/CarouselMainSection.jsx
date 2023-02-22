import React from 'react';
import carouselStyles from './CarouselMainSection.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';
import Button from '../Button';

function CarouselMainSection() {
    const {
        carousel,
        carouselInfo,
        carouselText,
        carouselTextTop,
        carouselTextBottom,
        carouselBtn,
        carouselHeading,
    } = carouselStyles;
    return (
        <section className={carousel}>
            <div className="container">
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <picture>
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906365/Linens/Slider/carousel-img-1_b3mfyi.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906365/Linens/Slider/carousel-img-1_zvbu3e.jpg"
                                type="image/jpeg"
                            />
                            <img
                                src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906365/Linens/Slider/carousel-img-1_zvbu3e.jpg"
                                alt="Carousel img 1"
                            />
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
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906364/Linens/Slider/carousel-img-2_wbvgq0.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906363/Linens/Slider/carousel-img-2_siz7mv.jpg"
                                type="image/jpeg"
                            />
                            <img
                                src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906363/Linens/Slider/carousel-img-2_siz7mv.jpg"
                                alt="Carousel img 2"
                            />
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
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906364/Linens/Slider/carousel-img-3_qxblde.webp"
                                type="image/webp"
                            />
                            <source
                                srcSet="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906364/Linens/Slider/carousel-img-3_rocukh.jpg"
                                type="image/jpeg"
                            />
                            <img
                                src="https://res.cloudinary.com/dm2s5stjy/image/upload/v1676906364/Linens/Slider/carousel-img-3_rocukh.jpg"
                                alt="Carousel img 3"
                            />
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

export default CarouselMainSection;
