import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Form from './FormPage';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { TReduxReducers } from 'types';

describe('Form test', () => {
  const mockData: TReduxReducers = {
    rootReducer: {
      searchData: '',
      searchResult: [],
      formData: [],
    },
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(mockData);
  test('Should render component', () => {
    const wrapper = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>
    );
    expect(wrapper).toBeTruthy();
  }),
    test('Should render text component', () => {
      const wrapper = render(
        <BrowserRouter>
          <Provider store={store}>
            <Form />
          </Provider>
        </BrowserRouter>
      );
      const input = wrapper.container.querySelector('input');
      expect(input?.type).toBe('text');
    }),
    test('Should render select component', () => {
      const wrapper = render(
        <BrowserRouter>
          <Provider store={store}>
            <Form />
          </Provider>
        </BrowserRouter>
      );
      const select = wrapper.container.querySelector('select');
      expect(select).toBeTruthy();
    });
});
