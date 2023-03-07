import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store';
import Modal from './Modal';

describe('Modal component', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Modal />
                </Provider>
            </BrowserRouter>,
        );

        const signUpButtons = screen.queryAllByRole('button', { name: /SIGN UP/i });
        expect(signUpButtons.length).toBe(2);
    });

    it('switches between sign up and log in forms', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Modal />
                </Provider>
            </BrowserRouter>,
        );

        const signUpButtons = screen.queryAllByText('SIGN UP');
        const signUpButton = signUpButtons[0];
        const logInButton = screen.getByText('LOG IN');

        expect(signUpButton).toHaveClass('active');
        expect(logInButton).not.toHaveClass('active');

        fireEvent.click(logInButton);

        expect(signUpButton).not.toHaveClass('active');
        expect(logInButton).toHaveClass('active');
    });
});
