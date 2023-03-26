import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Form from './Form';
import { BrowserRouter } from 'react-router-dom';

describe('Form test', () => {
  test('Should render component', () => {
    const wrapper = render(
    <BrowserRouter>    
      <Form />
    </BrowserRouter>);
    expect(wrapper).toBeTruthy();
  }),
  test('Should render text component', () => {
    const wrapper = render(
    <BrowserRouter>    
      <Form />
    </BrowserRouter>);
    const input = wrapper.container.querySelector('input');
    expect(input?.type).toBe('text');
  }),
  test('Should render select component', () => {
    const wrapper = render(
    <BrowserRouter>    
      <Form />
    </BrowserRouter>);
     const select = wrapper.container.querySelector('select');
     expect(select).toBeTruthy();
  })
});
