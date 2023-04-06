import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';
import Pagination from '../../components/Pagination/Pagination';

import './index.scss';
import { TRickAndMortyCharacter } from 'types';

// https://rickandmortyapi.com/api/character

const MainPage = ({ }): ReactElement => {
  const [cards, setCards] = useState<TRickAndMortyCharacter[]|[]>([]);
  const [searchParamets, setSearchParament] = useState<string>('');
  const [fetchStatus, setFetchStatus] = useState<'loading'|'loaded'>('loading');
  const [isShowCard, switchIsShowCard] = useState<boolean>(false);
  const [bigCardData, setBigCardData] = useState<TRickAndMortyCharacter>();
  const [countOfCard, setCountOfCards] = useState<number>(0);

  const searchParametrHandler = (eventParamert: string) => {
    setSearchParament(eventParamert);
    setFetchStatus('loading');
  }

  const fetchData = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => { return res.json() })
      .then(data => { 
        setCards(data.results || []);        
        setCountOfCards(data.info.count);
        setFetchStatus('loaded');
      }
      );
  }

  const fetchDataBySearch = ()=> {
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchParamets}`)
    .then(res => { return res.json() })
    .then(data => { 
      setCards(data.results || []);   
      setCountOfCards(data.info.count);   
      setFetchStatus('loaded');
    }
    );
  }
  useEffect(()=>{
    fetchData();    
    
  },[])
  useEffect(() => {
    fetchDataBySearch();   
  }, [searchParamets])

  return (
    <div className="MainPage">
      <SearchBar 
        setMainFormSearchParametr={searchParametrHandler} 
      />     
      <Pagination 
        countOfPaginationCells={countOfCard}
      />
      {fetchStatus === 'loading' && <h1>Processing data</h1>}
      {cards.length === 0 && <h1>No data to display</h1>}
       <CardList 
        cards={cards} 
        showModalHandler={()=>switchIsShowCard(true)} 
        hideModalHandler={()=>switchIsShowCard(false)}
        sendDataToParent={(data)=>{ setBigCardData(data)}} />
      {isShowCard && 
      <div className='MainCardBack'> 
        <div 
          className='BlackBack'
          onClick={()=>switchIsShowCard(false)}>                   
        </div>
        <BigCard 
          onClick={()=>{switchIsShowCard(false)}} 
          cardData = {bigCardData!}
          />
      </div>
      }
    </div>
  );
};
export default MainPage;
