import React from 'react';

import { render } from '@testing-library/react';

import LoadingCircle from './LoadingCircle';

describe('LoadingCircle', () => {
  const renderComponent = () => render((
    <LoadingCircle />
  ));

  it('renders grid with option', () => {
    const { getByRole } = renderComponent();
    expect(getByRole('progressbar')).not.toBeNull();
  });
});
