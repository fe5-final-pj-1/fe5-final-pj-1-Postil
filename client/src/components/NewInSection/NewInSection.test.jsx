import React from 'react';
import { render, screen } from '@testing-library/react';
import NewInSection from './NewInSection';

test('Testing the correct rendering of the section NewIn', () => {
    render(<NewInSection />);
    const linkElement = screen.getByText(/New In/i);
    expect(linkElement).toBeInTheDocument();
});
