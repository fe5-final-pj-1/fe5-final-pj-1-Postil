import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleItemSection from './SingleItemSection';

describe('TEST COMPONENT', () => {
    test('SingleItemSection shapshot', () => {
        const testSnapShot = render(<SingleItemSection />);
        expect(testSnapShot).toMatchSnapshot();
    });
    test('Testing the correct rendering of the section SingleItemSection', () => {
        render(<SingleItemSection />);
        const componentText = screen.getByText(/Reviews/i);
        const btnAdd = screen.getByText(/add to bag/i);
        expect(componentText).toBeInTheDocument();
        expect(btnAdd).toBeInTheDocument();
    });
    test('Testing the correct rendering of the button', () => {
        render(<SingleItemSection />);
        const componentLink = screen.getByRole('button', { name: '' });
        expect(componentLink).toBeInTheDocument();
        screen.debug();
    });
});
