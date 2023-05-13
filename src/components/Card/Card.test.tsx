import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from './Card';

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(<Card title={'1'} img={'2'} price={3} />);
    expect(wrapper).toBeTruthy();
  }),
    test('Should reder input placeholder', () => {
      const wrapper = render(<Card title={'1'} img={'2'} price={3} />);
      const h2 = wrapper.container.querySelector('h2');
      expect(h2?.textContent).toBe('1');
    });
});
