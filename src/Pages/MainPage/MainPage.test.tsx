import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import MainPage from '.';

describe('MainPage test', () => {
  test('Should render', () => {
    const wrapper = render(<MainPage />);
    expect(wrapper).toBeTruthy();
  }),
    test('Should render div', () => {
      const wrapper = render(<MainPage />);
      const diva = wrapper.container.querySelector('div');
      expect(diva!.className).toBe('MainPage');
    });
});
