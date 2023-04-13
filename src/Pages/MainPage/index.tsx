import { useDispatch } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';
import Pagination from '../../components/Pagination/Pagination';

import './index.scss';
import { TReduxState, TRickAndMortyCharacter } from 'types';

import { useSelector } from 'react-redux';
import { useGetCharacterByNameQuery } from '../../redux/rtk/getRequest';

const MainPage = ({}): ReactElement => {
  const [cards, setCards] = useState<TRickAndMortyCharacter[] | []>([]);
  const [searchParamets, setSearchParament] = useState<string>('');
  const [isShowCard, switchIsShowCard] = useState<boolean>(false);
  const [bigCardData, setBigCardData] = useState<TRickAndMortyCharacter>();
  
  const sData =  useSelector((state: TReduxState) => state.searchData);
  const { data, error, isLoading } = useGetCharacterByNameQuery('');

  useEffect(() => {        
    setSearchParament(sData);
  }, []);
  useEffect(() => {
    setCards([]);    
  }, [searchParamets]);

  return (
    <div className="MainPage">       
      <SearchBar setMainFormSearchParametr={()=>{}} />     
      {isLoading  && <h1>Processing data</h1>}
      {cards.length === 0 && <h1>No data to display</h1>}
      <CardList
        cards={data!||[]}
        showModalHandler={() => switchIsShowCard(true)}
        hideModalHandler={() => switchIsShowCard(false)}
        sendDataToParent={(dat) => {
          setBigCardData(dat);
        }}
      />
      {isShowCard && (
        <div className="MainCardBack">
          <div className="BlackBack" onClick={() => switchIsShowCard(false)}></div>
          <BigCard
            onClick={() => {
              switchIsShowCard(false);
            }}
            cardData={bigCardData!}
          />
        </div>
      )}
    </div>
  );
};
export default MainPage;
