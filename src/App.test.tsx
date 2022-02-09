import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('Main page', () => {
  it('renders main section', () => {
    const { getByRole } = render(<App />);
    const mainSection = getByRole('main');
    expect(document.body.contains(mainSection));
  });
  it('renders footer', () => {
    const { getByRole } = render(<App />);
    const footer = getByRole('contentinfo');
    expect(document.body.contains(footer));
  });
});
