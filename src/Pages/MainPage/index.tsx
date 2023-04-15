import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';

import './index.scss';
import { TReduxReducers, TRickAndMortyCharacter } from 'types';

import { useSelector } from 'react-redux';
import { useGetAllCharactersQuery } from '../../redux/rtk/getRequest';

const MainPage = ({}): ReactElement => {
  const [isShowCard, switchIsShowCard] = useState<boolean>(false);
  const [bigCardData, setBigCardData] = useState<TRickAndMortyCharacter>();
  const searchParametr = useSelector((state: TReduxReducers) => state.rootReducer.searchData);
  const { data, error, isLoading } = useGetAllCharactersQuery(searchParametr || '');

  return (
    <div className="MainPage">
      <SearchBar />
      {isLoading && <h1>Processing data</h1>}
      {error && <h1>No data to display</h1>}
      {data && !error && (
        <CardList
          cards={data.results || []}
          showModalHandler={() => switchIsShowCard(true)}
          hideModalHandler={() => switchIsShowCard(false)}
          sendDataToParent={(dat) => {
            setBigCardData(dat);
          }}
        />
      )}
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
