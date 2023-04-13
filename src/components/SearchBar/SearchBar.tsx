import React from 'react';
import './SearchBar.scss';
import { TReduxState } from 'types';

import { connect } from 'react-redux';

type Props = {
  pros?: number;
  searchText?: string;  
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
  componentDidMount(): void {
    this.setState({
      searchText: this.props.searchText || ''
    })
  }
  render() {
    return (
      <div className="SearchBar">       
        <input
          type="text"
          placeholder="ENTER_SEARCH_PARAMETER"
          onChange={(e) => {
            this.setState({
              searchText: e.currentTarget.value
            })
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              this.props.onSearchHandler!(this.state.searchText);      
            }
          }}
          value={this.state.searchText}
        />
        <button
          onClick={() => {            
            this.props.onSearchHandler!(this.state.searchText);
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
