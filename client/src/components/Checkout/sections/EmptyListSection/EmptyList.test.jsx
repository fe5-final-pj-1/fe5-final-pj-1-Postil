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

    it('should scroll to top when continue shopping button is clicked', () => {
        const scrollToSpy = jest.spyOn(window, 'scrollTo');
        render(
            <BrowserRouter>
                <EmptyList />
            </BrowserRouter>,
        );
        const buttonElement = screen.getByRole('link', { name: 'CONTINUE SHOPPING' });
        buttonElement.click();
        expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
        scrollToSpy.mockRestore();
    });
});
