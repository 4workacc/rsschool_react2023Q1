import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement, useEffect, useState } from 'react';

import './index.scss';
import { TRickAndMortyCharacter } from 'types';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';

// https://rickandmortyapi.com/api/character

const MainPage = ({ }): ReactElement => {
  const [cards, setCards] = useState<TRickAndMortyCharacter[]>([]);
  const [searchParamets, setSearchParament] = useState<string>('');
  const [fetchStatus, setFetchStatus] = useState<'loading'|'loaded'>('loaded');
  const [isShowCard, switchIsShowCard] = useState<boolean>(true);

  const searchParametrHandler = (eventParamert: string) => {
    setSearchParament(eventParamert);
    setFetchStatus('loading');
  }

  const fetchData = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => { return res.json() })
      .then(data => { 
        setCards(data.results);
        setFetchStatus('loaded');
      }
      );
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="MainPage">
      <SearchBar setMainFormSearchParametr={searchParametrHandler} />
      {fetchStatus === 'loading' && <h1>Processing data</h1>}
      <CardList cards={cards} />
      {isShowCard && 
      <div className='MainCardBack'> 
        <div 
          className='BlackBack'
          onClick={()=>switchIsShowCard(false)}>                   
        </div>
        <BigCard onClick={()=>{switchIsShowCard(false)}} />
      </div>
      }
    </div>
  );
};
export default MainPage;
