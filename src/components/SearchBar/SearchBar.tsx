import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TReduxReducers } from 'types';
import './SearchBar.scss';

const SearchBar: FC = () => {
  const searchTest = useSelector((state: TReduxReducers) => state.rootReducer.searchData);
  const [dipslaySeatchTest, setDisplaySetTest] = useState('');
  const dispatch = useDispatch();
  const onSearchHandler = (search: string) => {
    dispatch({
      type: 'ADD_SEARCH_DATA',
      value: search,
    });
  };
  useEffect(() => {
    setDisplaySetTest(searchTest);
  }, [searchTest]);
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="ENTER_SEARCH_PARAMETER"
        onChange={(e) => {
          setDisplaySetTest(e.currentTarget.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            onSearchHandler!(dipslaySeatchTest);
          }
        }}
        value={dipslaySeatchTest}
      />
      <button
        onClick={() => {
          onSearchHandler!(dipslaySeatchTest);
        }}
      >
        SEARCH
      </button>
    </div>
  );
};
export default SearchBar;
