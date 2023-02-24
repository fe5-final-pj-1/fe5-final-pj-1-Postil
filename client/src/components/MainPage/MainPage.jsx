import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <PopularSection />
        </main>
    );
}

export default MainPage;
