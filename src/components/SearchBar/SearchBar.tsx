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

  componentGracefulUnmount(){
    localStorage.setItem('searchText', this.state.searchText);
    window.removeEventListener('beforeunload', this.componentGracefulUnmount);
  }

  componentWillUnmount(): void {    
    this.componentGracefulUnmount(); 
  }
  componentDidMount(): void {    
    this.setState({ searchText: localStorage.getItem('searchText')! });
  }
  inputHandler = (e: string) => {
    this.setState((prevState) => { 
      return {
        ...prevState,
        searchText: e} 
    });    
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
          value={this.state.searchText}
        />
        <button>{this.state.searchText}</button>
      </div>
    );
  }
}

export default SearchBar;
