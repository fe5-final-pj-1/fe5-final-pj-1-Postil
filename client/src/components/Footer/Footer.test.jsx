import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Footer component', () => {
    test('renders the correct links', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            </Provider>,
        );
        const shopLink = screen.getByText(/shop/i);
        const catalogLink = screen.getByText(/catalog/i);
        const paymentAndDeliveryLink = screen.getByText(/payment & delivery/i);
        const returnsLink = screen.getByText(/returns/i);
        const privacyPolicyLink = screen.getByText(/privacy policy/i);
        const termsOfServiceLink = screen.getByText(/terms of service/i);

        expect(shopLink).toBeInTheDocument();
        expect(catalogLink).toBeInTheDocument();
        expect(paymentAndDeliveryLink).toBeInTheDocument();
        expect(returnsLink).toBeInTheDocument();
        expect(privacyPolicyLink).toBeInTheDocument();
        expect(termsOfServiceLink).toBeInTheDocument();
    });
});
