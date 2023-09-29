import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

jest.mock('./Home');
test('Home component renders correctly', () => {
  const component = render(<Home />);
  // const tree = component.toJSON();
  expect(component).toMatchSnapshot();
});
