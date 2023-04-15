import React from 'react';
import { describe, test, expect, beforeEach } from 'vitest';
import { RenderResult, render } from '@testing-library/react';

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { rickApi } from '../../redux/rtk/getRequest';
import thunk from 'redux-thunk';
import MainPage from '.';
import { TReduxReducers } from 'types';

describe('MainPage test', () => {
  let wrapper: RenderResult;
  const mockData: TReduxReducers = {
    rootReducer: {
      searchData: '',
      searchResult: [],
      formData: [],
    },
  };
  const middlewares = [thunk, rickApi.middleware];
  const mockStore = configureMockStore(middlewares);

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
