import React, { FC, useEffect, useState } from 'react';
import './SearchBar.scss';

const SearchBar: FC = (): React.ReactElement => {
  const [searchTextState, setSearchTextState] = useState<string>('');

  useEffect(() => {
    setSearchTextState(localStorage.getItem('searchText')! || '');
  }, []);

  const inputHandler = (e: string) => {
    setSearchTextState(e);
    localStorage.setItem('searchText', e);
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="ENTER_SEARCH_PARAMETER"
        onChange={(e) => {
          inputHandler(e.currentTarget.value);
        }}
        value={searchTextState}
      />
      <button>SEARCH</button>
    </div>
  );
};
export default SearchBar;
