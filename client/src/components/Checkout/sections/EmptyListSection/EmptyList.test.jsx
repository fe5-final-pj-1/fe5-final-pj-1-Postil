import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyList from './EmptyList';
import { BrowserRouter } from 'react-router-dom';

describe('EmptyList', () => {
    it('should render the correct title', () => {
        render(
            <BrowserRouter>
                <EmptyList />
            </BrowserRouter>,
        );
        const titleElement = screen.getByText('THANK YOU FOR YOUR ORDER!');
        expect(titleElement).toBeInTheDocument();
    });

    it('should render the continue shopping button', () => {
        render(
            <BrowserRouter>
                <EmptyList />
            </BrowserRouter>,
        );
        const buttonElement = screen.getByRole('link', { name: 'CONTINUE SHOPPING' });
        expect(buttonElement).toBeInTheDocument();
    });
});
