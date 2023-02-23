import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';
import SingleItemSection from '../SingleItemSection/SingleItemSection';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <PopularSection />
            <SingleItemSection />
        </main>
    );
}

export default MainPage;
