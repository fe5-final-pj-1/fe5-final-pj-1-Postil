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

function CarouselSection() {
    return (
        <section className={carouselStyles.carousel}>
            <div className="container">
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                    <div>
                        <picture>
                            <source srcSet={carouselImgOneWebp} type="image/webp" />
                            <source srcSet={carouselImgOneJpg} type="image/jpeg" />
                            <img src={carouselImgOneJpg} alt="Carousel img 1" />
                        </picture>
                        {/* <p>Legend 1</p> */}
                    </div>
                    <div>
                        <picture>
                            <source srcSet={carouselImgTwoWebp} type="image/webp" />
                            <source srcSet={carouselImgTwoJpg} type="image/jpeg" />
                            <img src={carouselImgTwoJpg} alt="Carousel img 2" />
                        </picture>
                        {/* <p>Legend 2</p> */}
                    </div>
                    <div>
                        <picture>
                            <source srcSet={carouselImgThreeWebp} type="image/webp" />
                            <source srcSet={carouselImgThreeJpg} type="image/jpeg" />
                            <img src={carouselImgThreeJpg} alt="Carousel img 3" />
                        </picture>
                        {/* <p>Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

export default CarouselSection;
