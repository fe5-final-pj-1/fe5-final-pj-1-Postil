import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { BrowserRouter } from 'react-router-dom';
import PaymentOptionsPage from './PaymentOptionsPage';

describe('PaymentOptionsPage', () => {
    test('renders the PaymentOptionsPage component', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PaymentOptionsPage />
                </BrowserRouter>
            </Provider>,
        );
        const bagPageElement = screen.getByTestId('pay-page');
        expect(bagPageElement).toBeInTheDocument();
    });
});
