import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';
import PartnersSection from 'components/PartnersSection';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <PopularSection />
            <PartnersSection />
        </main>
    );
}

export default MainPage;
