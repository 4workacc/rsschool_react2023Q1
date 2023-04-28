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
  const [displayValue, setDisplayValue] = useState<string>('');
  useEffect(()=>{
    setDisplayValue(searchValue);
  }, [searchValue]);
  
  const onSubmit = (data: ISearchData) => {
    if (data.searchValue) {
      dispatch(searchAction.setSearchValue({ searchValue: data.searchValue }));
    };
  }
  return (
    <div className="SearchBar">
      <input 
        type="text"
        placeholder='Search value'
        value={`${displayValue}`} 
        onChange={(e)=>{setDisplayValue(e.currentTarget.value)}}/>
      <button onClick={()=>onSubmit({searchValue: displayValue})}>Submit</button>
    </div>
  );
};
export default SearchBar;
