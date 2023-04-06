import React from 'react';
import './SearchBar.scss';

type Props = {
  pros?: number;
  setMainFormSearchParametr(ev: string): void;
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
  componentWillUnmount(): void {
    localStorage.setItem('searchText', this.state.searchText);
  }
  componentDidMount(): void {
    this.setState({ searchText: localStorage.getItem('searchText')! || '' });
  }
  inputHandler = (e: string) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchText: e,
      };
    });    
    
    localStorage.setItem('searchText', e);
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="ENTER_SEARCH_PARAMETER"
          onChange={(e) => {            
            this.inputHandler(e.currentTarget.value);            
          }}
          onKeyDown={ (e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                this.props.setMainFormSearchParametr(e.currentTarget.value)
              }
          }}
          value={this.state.searchText}
        />
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
