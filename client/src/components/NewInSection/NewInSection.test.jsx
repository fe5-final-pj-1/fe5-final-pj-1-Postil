import React from 'react';
import { render } from '@testing-library/react';
import NewInSection from './NewInSection';

describe('TEST COMPONENT', () => {
    test('NewInSection snapshot', () => {
        const testSnapShot = render(<NewInSection />);
        expect(testSnapShot).toMatchSnapshot();
    });
});
