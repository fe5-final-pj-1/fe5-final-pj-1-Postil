import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
    test('should render the title', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/About Us/i)).toBeInTheDocument();
    });

    test('should render the first paragraph', () => {
        const { getByText } = render(<AboutPage />);
        expect(
            getByText(/We welcome you to your favorite online textile store/i),
        ).toBeInTheDocument();
    });

    test('should render the "Who are we?" subtitle', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/Who are we\?/i)).toBeInTheDocument();
    });

    test('should render the second paragraph', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/A team that is willing and ready/i)).toBeInTheDocument();
    });

    test('should render the "What do we offer you?" subtitle', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/What do we offer you\?/i)).toBeInTheDocument();
    });

    test('should render the third paragraph', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/At first glance, the answer is simple/i)).toBeInTheDocument();
    });

    test('should render the "Our advantages:" subtitle', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/Our advantages:/i)).toBeInTheDocument();
    });

    test('should render the list of advantages', () => {
        const { getByText } = render(<AboutPage />);
        expect(getByText(/Careful selection of products that we offer you:/i)).toBeInTheDocument();
        expect(getByText(/Serious selection of suppliers and manufacturers:/i)).toBeInTheDocument();
        expect(getByText(/Providing quality services:/i)).toBeInTheDocument();
        expect(getByText(/A wide range of presented goods:/i)).toBeInTheDocument();
        expect(getByText(/Prompt delivery and convenient form of payment:/i)).toBeInTheDocument();
    });
});
