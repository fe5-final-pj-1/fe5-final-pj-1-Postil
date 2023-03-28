import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SummarySection from './SummarySection';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';

describe('SummarySection', () => {
    test('renders summary section', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <SummarySection />
                </BrowserRouter>
            </Provider>,
        );
        const summaryTitle = screen.getByText('SUMMARY');
        const enterCode = screen.getByText('ENTER COUPONE CODE');
        expect(summaryTitle).toBeInTheDocument();
        expect(enterCode).toBeInTheDocument();
        await waitFor(() => {
            const subtotal = screen.getByText('SUBTOTAL');
            const shipping = screen.getByText('SHIPPING');
            const taxes = screen.getByText('TAXES');
            const total = screen.getByText('TOTAL');
            expect(subtotal).toBeInTheDocument();
            expect(shipping).toBeInTheDocument();
            expect(taxes).toBeInTheDocument();
            expect(total).toBeInTheDocument();
        });
    });
});
