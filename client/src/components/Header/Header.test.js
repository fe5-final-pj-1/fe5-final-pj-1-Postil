import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
    render(<Header />);
    const linkElement = screen.getByText(/I'm header and I wish good luck everybody!/i);
    expect(linkElement).toBeInTheDocument();
});
