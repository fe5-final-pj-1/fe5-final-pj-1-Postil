import React from 'react';
import CarouselMainSection from '../../components/CarouselMainSection/CarouselMainSection';
import PopularSection from '../../components/PopularSection';
import NewInSection from '../../components/NewInSection';
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
