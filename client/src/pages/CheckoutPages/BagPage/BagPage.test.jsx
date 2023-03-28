import React from 'react';
import { render, screen } from '@testing-library/react';
import BagPage from './BagPage';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { BrowserRouter } from 'react-router-dom';

describe('BagPage', () => {
    test('renders the BagPage component', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <BagPage />
                </BrowserRouter>
            </Provider>,
        );
        const bagPageElement = screen.getByTestId('bag-page');
        expect(bagPageElement).toBeInTheDocument();
    });
});
