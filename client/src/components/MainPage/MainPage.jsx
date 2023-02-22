import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import NewInSection from '../NewInSection';
import ProductCarousel from '../ProductCarousel';
import CarouselSection from '../CarouselSection';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <div className="container">
                <ProductCarousel />
            </div>
            <CarouselSection />
        </main>
    );
}

export default MainPage;
