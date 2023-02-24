import React from 'react';
import CarouselMainSection from '../CarouselMainSection/CarouselMainSection';
import PopularSection from '../PopularSection';
import NewInSection from '../NewInSection';
import PaymentSection from '../CheckoutPage/PaymentSection/PaymentSection';

function MainPage() {
    return (
        <main>
            <CarouselMainSection />
            <NewInSection />
            <PopularSection />
            <PaymentSection />
        </main>
    );
}

export default MainPage;
