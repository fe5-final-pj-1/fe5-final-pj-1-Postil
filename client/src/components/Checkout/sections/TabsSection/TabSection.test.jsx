import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TabsSection from './TabsSection';

describe('TabsSection', () => {
    test('should render tabs', () => {
        render(
            <Router>
                <TabsSection />
            </Router>,
        );

        const shoppingBagTab = screen.getByText('1. Shopping Bag');
        const shippingDetailsTab = screen.getByText('2. Shipping Details');
        const paymentOptionsTab = screen.getByText('3. Payment Options');

        expect(shoppingBagTab).toBeInTheDocument();
        expect(shippingDetailsTab).toBeInTheDocument();
        expect(paymentOptionsTab).toBeInTheDocument();
    });
});
