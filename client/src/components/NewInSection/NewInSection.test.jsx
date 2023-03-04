import React from 'react';
import { render, screen } from '@testing-library/react';
import NewInSection from './NewInSection';

test('Testing the correct rendering of the section NewIn', () => {
    render(<NewInSection />);
    const linkElement = screen.getByText(/NewIn/i);
    expect(linkElement).toBeInTheDocument();
});
