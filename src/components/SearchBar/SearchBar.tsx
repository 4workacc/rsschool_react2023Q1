import React from 'react';
import './SearchBar.scss';

type Props = {
  pros?: number;
  onChange?(): void;
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
    this.setState({ searchText: localStorage.getItem('searchText')! });
  }
  inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.currentTarget.value });
    localStorage.setItem('searchText', this.state.searchText);
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="ENTER_SEARCH_PARAMETER"
          onChange={(e) => {
            this.inputHandler(e);
          }}
          value={this.state.searchText}
        />
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
