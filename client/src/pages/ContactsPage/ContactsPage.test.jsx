import React from 'react';
import { render } from '@testing-library/react';
import ContactsPage from './ContactsPage';

describe('ContactsPage component', () => {
    test('renders the title', () => {
        const { getByText } = render(<ContactsPage />);
        const title = getByText(/Contacts/i);
        expect(title).toBeInTheDocument();
    });

    test('renders the phone numbers', () => {
        const { getByText } = render(<ContactsPage />);
        const phoneNumbers = getByText(/777-77-77/i);
        expect(phoneNumbers).toBeInTheDocument();
    });
});
