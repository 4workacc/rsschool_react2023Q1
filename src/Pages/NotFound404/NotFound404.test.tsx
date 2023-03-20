import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import NotFound404 from '.';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(<NotFound404 />);
    expect(wrapper).toBeTruthy();
  });
});
