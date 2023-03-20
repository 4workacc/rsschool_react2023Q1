import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from './Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(
      <BrowserRouter>
        <Header page="AboutUS" />
      </BrowserRouter>
    );
    expect(wrapper).toBeTruthy();
  }),
    test('Should render component with h1', () => {
      const wrapper = render(
        <BrowserRouter>
          <Header page="AboutUS" />
        </BrowserRouter>
      );
      const h1 = wrapper.container.querySelector('h1');
      expect(h1?.textContent).toBe('Current page: AboutUS');
    });
});
