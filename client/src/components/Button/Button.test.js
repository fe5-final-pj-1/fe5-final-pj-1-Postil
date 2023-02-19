import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('button renders with props', () => {
    render(<Button text="I am a button" />);
    const linkElement = screen.getByText(/I am a button/i);
    expect(linkElement).toBeInTheDocument();
});
