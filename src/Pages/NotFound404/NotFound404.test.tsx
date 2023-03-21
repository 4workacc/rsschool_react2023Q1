import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import NotFound404 from '.';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(
    <BrowserRouter>
      <NotFound404 />
    </BrowserRouter>);
    expect(wrapper).toBeTruthy();
  });
});
