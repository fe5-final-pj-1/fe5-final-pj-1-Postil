import React from 'react';
import { render, waitFor } from '@testing-library/react';
import NewInSection from './NewInSection';

describe('TEST COMPONENT', () => {
    test('NewInSection snapshot', () => {
        const testSnapShot = render(<NewInSection />);
        expect(testSnapShot).toMatchSnapshot();
    });
    test('renders component', () => {
        const { getByTestId } = render(<NewInSection />);
        const component = getByTestId('newInSection');
        expect(component).toBeInTheDocument();
    });
    test('should render "NEW IN" title', async () => {
        const { getByText } = render(<NewInSection />);
        await waitFor(() => expect(getByText('NEW IN')).toBeInTheDocument());
    });
});
