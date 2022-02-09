import * as React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { Landing } from './Landing';

describe('<Landing />', () => {
  it('renders landing section', () => {
    const { getByRole } = render(<Landing />);
    const actionButton = getByRole('button');

    expect(document.body.contains(actionButton));
    expect(actionButton.textContent).equal('CO JE TO BIOREZONANCE');
  });
});
