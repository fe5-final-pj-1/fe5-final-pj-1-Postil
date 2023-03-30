import React from 'react';
import CarouselMainSection from '../AllSections/CarouselMainSection';
import PopularSection from '../AllSections/PopularSection';
import NewInSection from '../AllSections/NewInSection';
import PartnersSection from 'pages/AllSections/PartnersSection';

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
