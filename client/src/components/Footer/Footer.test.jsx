import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

test('renders Footer component without errors', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>,
    );
});
