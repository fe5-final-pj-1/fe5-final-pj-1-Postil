import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

test('opens the catalog menu on icon click', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>,
    );
    const catalogMenu = screen.getByRole('link', { name: /Catalog/i });
    expect(catalogMenu).toBeVisible();
});
