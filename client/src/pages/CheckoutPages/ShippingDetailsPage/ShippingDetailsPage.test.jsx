import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { BrowserRouter } from 'react-router-dom';
import ShippingDetailsPage from './ShippingDetailsPage';

describe('ShippingDetailsPage', () => {
    test('renders the ShippingDetailsPage component', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ShippingDetailsPage />
                </BrowserRouter>
            </Provider>,
        );
        const bagPageElement = screen.getByTestId('shipping-page');
        expect(bagPageElement).toBeInTheDocument();
    });
});
