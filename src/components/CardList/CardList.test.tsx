import React from 'react';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, RenderResult } from '@testing-library/react';
import CardList from './CardList';

describe('CardList test', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<CardList cards={[]} sendDataToParent={() => {}} />);
  });
  test('Should render component', () => {
    expect(wrapper).toBeTruthy();
  }),
    test('Should render div', () => {
      const inp = wrapper.container.querySelector('div');
      expect(inp!.className).toBe('MainForm_Cards');
    });
});
