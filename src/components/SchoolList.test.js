import React from 'react';
import { render } from '@testing-library/react';
import SchoolList from './SchoolList';

jest.mock('./SchoolList');
test('SchoolList component renders correctly', () => {
  const component = render(<SchoolList />);
  expect(component).toMatchSnapshot();
});
