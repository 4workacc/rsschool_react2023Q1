import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import PaginationCell from './PaginationCell';

describe('PaginationCell test', () => {
  test('Should render component', () => {
    const wrapper = render(<PaginationCell innerNumber={1} clickHandler={() => {}} />);
    expect(wrapper).toBeTruthy();
  }),
    test('Should havee h1 with text', () => {
      const wrapper = render(<PaginationCell innerNumber={1} clickHandler={() => {}} />);
      const h1 = wrapper.container.querySelector('h1');
      expect(h1!.textContent).toBe('2');
    });
});
