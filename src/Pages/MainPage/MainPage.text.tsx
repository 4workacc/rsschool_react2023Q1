import React from 'react';
import { describe, test, expect, beforeEach } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import MainPage from '.';
import { TReduxReducers } from 'types';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('MainPage test', () => {
  let wrapper: RenderResult;
  const mockData: TReduxReducers = {
    rootReducer: {
      searchData: '',
      searchResult: [],
    },
  };
  const mockStore = configureStore([]);

  beforeEach(() => {
    const store = mockStore(mockData);
    wrapper = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });
  test('Should render', () => {
    expect(wrapper).toBeTruthy();
  }),
    test('Should render div', () => {
      const diva = wrapper.container.querySelector('div');
      expect(diva!.className).toBe('MainPage');
    });
});
