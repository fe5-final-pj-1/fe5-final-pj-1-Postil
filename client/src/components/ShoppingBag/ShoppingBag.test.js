import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingBag from './ShoppingBag';

test('Shopping Bag should be rendered', () => {
    render(<ShoppingBag />);
    const headerElement = screen.getByRole('heading', { name: /shopping bag/i });
    expect(headerElement).toBeInTheDocument();
});
