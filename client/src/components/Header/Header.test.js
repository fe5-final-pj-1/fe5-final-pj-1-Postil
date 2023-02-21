import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('Icon snapshot', () => {
    const view = render(<Header/>);
    expect(view).toMatchSnapshot();
});
