import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SummaryTextSection from './SummaryTextSection';

describe('SummaryTextSection component', () => {
    test('renders component with correct subtotal and total', () => {
        const subtotal = 100;
        const route = '/checkout/confirm';
        const { getByText } = render(
            <BrowserRouter>
                <SummaryTextSection subtotal={subtotal} route={route} />
            </BrowserRouter>,
        );
        expect(
            getByText((content) => {
                return content.startsWith('SUBTOTAL');
            }),
        ).toBeInTheDocument();
        expect(
            getByText((content) => {
                return content.startsWith('TOTAL');
            }),
        ).toBeInTheDocument();
    });

    test('renders component with correct taxes', () => {
        const subtotal = 20;
        const route = '/checkout';
        const { getByText } = render(
            <BrowserRouter>
                <SummaryTextSection subtotal={subtotal} route={route} />
            </BrowserRouter>,
        );
        expect(
            getByText((content) => {
                return content.startsWith('TAXES');
            }),
        ).toBeInTheDocument();
    });

    test('renders component with correct link route', () => {
        const subtotal = 20;
        const route = '/checkout';
        render(
            <BrowserRouter>
                <SummaryTextSection subtotal={subtotal} route={route} />
            </BrowserRouter>,
        );
        const linkElement = screen.getByRole('link', { name: 'BUY' });
        expect(linkElement).toHaveAttribute('href', route);
    });
});
