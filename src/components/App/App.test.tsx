import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { App } from './App';

describe('<App />', () => {
  it('renders all sections', () => {
    const { getByRole } = render(<App />);

    const mainSection = getByRole('main');
    const navigation = getByRole('navigation');
    const footer = getByRole('contentinfo');

    expect(document.body.contains(mainSection));
    expect(document.body.contains(navigation));
    expect(document.body.contains(footer));
  });
});
