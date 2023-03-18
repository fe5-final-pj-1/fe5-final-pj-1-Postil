import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PaymentSection from './PaymentSection';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('PaymentSection component', () => {
    test('renders payment options', () => {
        const { getByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PaymentSection />
                </BrowserRouter>
            </Provider>,
        );
        expect(getByText('Payment by credit card')).toBeInTheDocument();
        expect(getByText('Payment to the courier')).toBeInTheDocument();
    });

    test('updates active state when a payment option is clicked', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PaymentSection />
                </BrowserRouter>
            </Provider>,
        );
        const creditCardOption = screen.getByTestId('card');
        const cashOption = screen.getByTestId('cash');
        fireEvent.click(creditCardOption);
        expect(creditCardOption).toHaveClass('payCardBlockActive');
        expect(cashOption).not.toHaveClass('payCashBlocActive');
        fireEvent.click(cashOption);
        expect(cashOption).toHaveClass('payCashBlocActive');
        expect(creditCardOption).not.toHaveClass('payCardBlockActive');
    });
});
