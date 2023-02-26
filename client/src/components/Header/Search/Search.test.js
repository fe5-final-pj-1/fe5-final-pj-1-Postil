import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

jest.mock('../../../api/searchForProducts', () => ({
    __esModule: true,
    default: jest.fn(() => Promise.resolve({ data: [] })),
}));

test('should render the Search component', () => {
    const { container } = render(<Search />);
    expect(container.querySelector('input')).toBeInTheDocument();
    expect(container.querySelector('.listItem')).toBeInTheDocument();
});
