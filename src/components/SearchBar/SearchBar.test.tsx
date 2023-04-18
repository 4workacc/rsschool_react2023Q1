import React from 'react';
import { describe, test, expect, beforeEach, vi, afterAll } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';
import { TReduxRootState } from 'types';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('SearchBar test', () => {
  let wrapper: RenderResult;
  let input: HTMLInputElement;
  const mockData: TReduxRootState = {
    searchData: '',
    searchResult: [],
  };
  const mockStore = configureStore([]);
  beforeEach(() => {
    const store = mockStore(mockData);
    wrapper = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    input = screen.getByPlaceholderText('ENTER_SEARCH_PARAMETER');
  });
  test('Should render component', () => {
    expect(wrapper).toBeTruthy();
  }),
    test('Should reder input placeholder', () => {
      const inp = wrapper.container.querySelector('input');
      expect(inp?.placeholder).toBe('ENTER_SEARCH_PARAMETER');
    }),
    test('Should show text SEARCH', () => {
      expect(screen.getByText(/SEARCH/i)).toBeDefined();
    }),
    test('On change test', async () => {
      await userEvent.type(input, 'aasd');
      expect(input.value).toContain('aasd');
    }),
    afterAll(() => {
      vi.clearAllMocks();
      vi.resetAllMocks();
    });
});
