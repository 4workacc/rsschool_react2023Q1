import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import BigCard from './BigCard';
import { TRickAndMortyCharacter } from 'types';

const mockData: TRickAndMortyCharacter = {
  image: '',
  id: 1,
  name: 'Q',
  status: 'Alive',
  species: 'Q',
  type: 'Q',
  gender: 'Female',
  origin: {
    name: 'Q',
    url: 'Q',
  },
  location: {
    name: 'Q',
    url: 'Q',
  },
  episode: [],
  url: 'Q',
  created: 'Q',
};

describe('SearchBar test', () => {
  test('Should render component', () => {
    const wrapper = render(<BigCard cardData={mockData} onClick={() => {}} />);
    expect(wrapper).toBeTruthy();
  }),
    test('Should render button', () => {
      const wrapper = render(<BigCard cardData={mockData} onClick={() => {}} />);
      const h1 = wrapper.container.querySelector('h1');
      expect(h1!.textContent).toBe('Q');
    });
});
