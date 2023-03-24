import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';

import InfoModal from './InfoModal';

jest.mock('react-redux');

describe('InfoModal', () => {
    const closeModal = jest.fn();

    beforeEach(() => {
        useSelector.mockImplementation((selector) =>
            selector({
                store: {
                    login: {
                        isLogIn: false,
                    },
                },
            }),
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('closes the modal after 3 seconds', () => {
        jest.useFakeTimers();

        const { rerender, queryByText } = render(
            <InfoModal text="Thank you for subscribing!" isOpen closeModal={closeModal} />,
        );

        expect(queryByText('Thank you for subscribing!')).toBeInTheDocument();

        rerender(
            <InfoModal text="Thank you for subscribing!" isOpen={false} closeModal={closeModal} />,
        );

        jest.advanceTimersByTime(3000);

        expect(closeModal).toHaveBeenCalledTimes(0);

        jest.useRealTimers();
    });

    test('calls the closeModal function when the close button is clicked', () => {
        const { getByRole } = render(
            <InfoModal text="Thank you for subscribing!" isOpen closeModal={closeModal} />,
        );

        fireEvent.click(getByRole('button'));

        expect(closeModal).toHaveBeenCalledTimes(1);
    });
});
