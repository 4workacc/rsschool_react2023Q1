import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';
import Pagination from '../../components/Pagination/Pagination';

import './index.scss';
import { TRickAndMortyCharacter } from 'types';

// https://rickandmortyapi.com/api/character

const MainPage = ({}): ReactElement => {
  const [cards, setCards] = useState<TRickAndMortyCharacter[] | []>([]);
  const [searchParamets, setSearchParament] = useState<string>('');
  const [fetchStatus, setFetchStatus] = useState<'loading' | 'loaded'>('loading');
  const [isShowCard, switchIsShowCard] = useState<boolean>(false);
  const [bigCardData, setBigCardData] = useState<TRickAndMortyCharacter>();
  const [countOfCard, setCountOfCards] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const searchParametrHandler = (eventParamert: string) => {
    setSearchParament(eventParamert);
    setFetchStatus('loading');
  };

  const fetchData = (searchString: string) => {
    fetch(`https://rickandmortyapi.com/api/character${searchString}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.error) {
          setCards(data.results || []);
          setCountOfCards(data.info.count);
          setFetchStatus('loaded');
        } else {
          setCards([]);
          setCountOfCards(0);
          setFetchStatus('loaded');
        }
      });
  };
  useEffect(() => {
    // fetchData('');
    setCards([]);
    setSearchParament(localStorage.getItem('searchText') || '');
  }, []);
  useEffect(() => {
    setCards([]);
    fetchData(`/?name=${searchParamets}`);
  }, [searchParamets]);
  const clickPaginationHandler = (pageNumber: number) => {
    setFetchStatus('loading');
    setCurrentPage(pageNumber);
    const tempSearchString: string =
      searchParamets === ''
        ? `/?page=${pageNumber}`
        : `/?name=${searchParamets}&&?page=${pageNumber}`;
    fetchData(tempSearchString);
  };
  return (
    <div className="MainPage">
      <SearchBar setMainFormSearchParametr={searchParametrHandler} />
      <h1>{`Current pages ${currentPage + 1}/ ${Math.ceil(countOfCard / 20)}`}</h1>
      <Pagination
        countOfPaginationCells={Math.ceil(countOfCard / 20)}
        getPageByNumber={clickPaginationHandler}
      />
      {fetchStatus === 'loading' && <h1>Processing data</h1>}
      {cards.length === 0 && <h1>No data to display</h1>}
      <CardList
        cards={cards}
        showModalHandler={() => switchIsShowCard(true)}
        hideModalHandler={() => switchIsShowCard(false)}
        sendDataToParent={(data) => {
          setBigCardData(data);
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
