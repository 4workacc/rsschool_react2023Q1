import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from './Card';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(<Card />);
    expect(wrapper).toBeTruthy();
  }),
    test('Should reder input placeholder', () => {
      const wrapper = render(<Card />);
      const h2 = wrapper.container.querySelector('h2');
      expect(h2?.textContent).toBe('Card');
    });
});
