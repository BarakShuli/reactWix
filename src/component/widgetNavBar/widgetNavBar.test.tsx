import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import widgetNavBar from './widgetNavBar';

describe('<widgetNavBar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<widgetNavBar />);
    const widgetNavBar = getByTestId('widgetNavBar');

    expect(widgetNavBar).toBeInTheDocument();
  });
});