import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import Header from './Header';

test('opens the catalog menu on icon click', () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>,
    );
    const catalogIcon = screen.getByTestId('btn', { name: /svg/i });
    const catalogMenu = screen.getByRole('link', { name: /Catalog/i });
    userEvent.click(catalogIcon);
    expect(catalogMenu).toBeVisible();
});
