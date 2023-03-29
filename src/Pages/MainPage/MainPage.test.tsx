import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import MainPage from '.';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(<MainPage />);
    expect(wrapper).toBeTruthy();
  });
});
