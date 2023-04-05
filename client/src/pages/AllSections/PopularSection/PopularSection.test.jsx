import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PopularSection from './PopularSection';

describe('PopularSection', () => {
    test('should render the component without errors', () => {
        render(
            <BrowserRouter>
                <PopularSection />
            </BrowserRouter>,
        );
        const popularSection = screen.getByTestId('popular-section');
        expect(popularSection).toBeInTheDocument();
    });

    test('should render a "SEE ALL" button with the correct link', () => {
        render(
            <BrowserRouter>
                <PopularSection />
            </BrowserRouter>,
        );
        const seeAllBtn = screen.getByTestId('see-all-btn');
        expect(seeAllBtn).toBeInTheDocument();
        expect(seeAllBtn.getAttribute('href')).toBe('/catalog');
    });
});
