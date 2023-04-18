import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from './Card';
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
    const wrapper = render(
      <Card data={mockData} showModal={() => {}} hideModal={() => {}} sendDataToParent={() => {}} />
    );
    expect(wrapper).toBeTruthy();
  }),
    test('Should reder input placeholder', () => {
      const wrapper = render(
        <Card
          data={mockData}
          showModal={() => {}}
          hideModal={() => {}}
          sendDataToParent={() => {}}
        />
      );
      const h2 = wrapper.container.querySelector('h2');
      expect(h2?.textContent).toBe('Name: Q');
    });
});
