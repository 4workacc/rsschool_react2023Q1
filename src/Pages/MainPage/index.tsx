import SearchBar from '../../components/SearchBar/SearchBar';
import React, { ReactElement } from 'react';

import './index.scss';

import { useGetAllCharactersQuery } from '../../redux/rtk/getRequest';
import { useFullStateDispatch, useFullStateSelector } from '../../redux/store';
import CardList from '../../components/CardList/CardList';
import BigCard from '../../components/BigCard/BigCard';
import { actions as bigCardAction } from '../../redux/reducers/bigCardReducer';

const MainPage = ({}): ReactElement => {
  const dispatch = useFullStateDispatch();
  const searchValue = useFullStateSelector((state) => state.searchReducer.searchValue);
  const isShowCard: boolean = useFullStateSelector((state) => state.cardReducer.isShow);
  const { data, error, isLoading } = useGetAllCharactersQuery(searchValue || '');
  return (
    <div className="MainPage">
      <SearchBar />
      {isLoading && <h1>Processing data</h1>}
      {error && <h1>No data to display</h1>}
      {data && !error && <CardList cards={data?.results || []} />}
      {isShowCard && (
        <div className="MainCardBack">
          <div
            className="BlackBack"
            onClick={() => {
              dispatch(bigCardAction.hideBigCard());
            }}
          ></div>
          <BigCard />
        </div>
      )}
    </div>
  );
};
export default MainPage;
