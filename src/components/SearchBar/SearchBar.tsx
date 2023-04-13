import React from 'react';
import './SearchBar.scss';
import { TReduxState } from 'types';

import { connect } from 'react-redux';

type Props = {
  pros?: number;
  searchText?: string;
  setMainFormSearchParametr(ev: string): void;
  onSearchHandler?(val: string): void;
};

type SearchType = {
  searchText: string;
};

class SearchBar extends React.Component<Props, SearchType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  render() {
    return (
      <div className="SearchBar">       
        <input
          type="text"
          placeholder="ENTER_SEARCH_PARAMETER"
          onChange={(e) => {
            this.props.onSearchHandler!(e.currentTarget.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              this.props.setMainFormSearchParametr(e.currentTarget.value);
              
            }
          }}
          value={this.props.searchText}
        />
        <button
          onClick={() => {
            this.props.setMainFormSearchParametr(this.state.searchText);
          }}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: TReduxState) => ({
  searchText: state.searchData
});
const mapDispatch = (dispatch: any) => ({
  onSearchHandler: (val: string) => {
    dispatch({
      type: 'ADD_SEARCH_DATA',
      value: val
    })
  }
});
export default connect(mapStateToProps, mapDispatch) (SearchBar);
