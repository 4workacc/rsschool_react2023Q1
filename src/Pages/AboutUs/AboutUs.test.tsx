import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import AboutUs from '.';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(wrapper).toBeTruthy();
  });
});
