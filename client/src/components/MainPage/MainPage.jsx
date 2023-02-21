import React from 'react';
import CarouselSection from '../CarouselSection/CarouselSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';

function MainPage() {
    return (
        <main>
            <CarouselSection />
            <NewInSection />
            <PopularSection />
        </main>
    );
}

export default MainPage;
