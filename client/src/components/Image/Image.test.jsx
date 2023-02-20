import React from 'react';
import { render } from '@testing-library/react';

import Image from './';

test('Image shapshot', () => {
    const view = render(<Image width={100} height={100} />);
    expect(view).toMatchSnapshot();
});
