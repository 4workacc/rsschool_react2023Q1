import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';

import './index.scss';

type Props = {
  pros?: number;
};

type Card = {
  title: string;
  img: string;
  price: number;
};

type Cards = {
  cards: Card[];
};

class MainPage extends React.Component<Props, Cards> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'QWE',
          img: 'qwe',
          price: 1,
        },
      ],
    };
  }
  render() {
    return (
      <div className="MainPage">
        <h1>MainPage</h1>
        <SearchBar />
        <div className="Cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default MainPage;
