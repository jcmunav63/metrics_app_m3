import React from 'react';
import { render } from '@testing-library/react';
import SchoolDetails from './SchoolDetails';

jest.mock('./SchoolDetails');
test('SchoolDetails component renders correctly', () => {
  const component = render(<SchoolDetails />);
  expect(component).toMatchSnapshot();
});
