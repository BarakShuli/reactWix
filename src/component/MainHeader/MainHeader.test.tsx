import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainHeader from './MainHeader';

describe('<MainHeader />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<MainHeader />);
    const mainHeader = getByTestId('MainHeader');

    expect(mainHeader).toBeInTheDocument();
  });
});