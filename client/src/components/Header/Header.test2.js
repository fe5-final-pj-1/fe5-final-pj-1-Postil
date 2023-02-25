import React from 'react';
import userEvent from '@testing-library/user-event'
import { screen, render} from '@testing-library/react';
import Header from './Header';

test('opens the catalog menu on icon click', () => {
  render(<Header />);
  const catalogIcon = screen.getByTestId('btn', {name: /svg/i });
  const catalogMenu = screen.getByRole('link', { name: /Catalog/i });
  userEvent.click(catalogIcon);
  expect(catalogMenu).toBeVisible();
});
 