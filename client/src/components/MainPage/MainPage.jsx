import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';
import ShippingDetailsPages from '../CheckoutPage/pages/ShippingDetailsPage/ShippingDetailsPages';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <PopularSection />
            <ShippingDetailsPages />
        </main>
    );
}

export default MainPage;
