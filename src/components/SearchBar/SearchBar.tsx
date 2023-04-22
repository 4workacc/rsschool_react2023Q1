import React, { FC, useEffect, useState } from 'react';
import './SearchBar.scss';
import { useFullStateDispatch, useFullStateSelector } from '../../redux/store';
import { actions as searchAction } from '../../redux/reducers/searchReducer';

interface ISearchData {
  searchValue: string;
}

const SearchBar: FC = () => {
  const searchValue = useFullStateSelector((state) => state.searchReducer.searchValue)
  const dispatch = useFullStateDispatch();

  const onSubmit = (data: ISearchData) => {
    if (data.searchValue) {
      dispatch(searchAction.setSearchValue({ searchValue: 'newValue' }));
    };
  }
  return (
    <div className="SearchBar">
      <h1>{`SearchValue: ${searchValue}`}</h1>
      <button onClick={()=>onSubmit({searchValue: '123'})}>Submit</button>
    </div>
  );
};
export default SearchBar;
