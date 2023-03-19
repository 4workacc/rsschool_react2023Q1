import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';

import './index.scss';

type Props = {
  pros?: number;
};

type TCard = {
  title: string;
  img: string;
  price: number;
};

type Cards = {
  cards: TCard[];
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
        {
          title: 'QWE1',
          img: 'qwe1',
          price: 2,
        },
        {
          title: 'QWE2',
          img: 'qwe2',
          price: 3,
        },
        {
          title: 'QWE3',
          img: 'qwe3',
          price: 4,
        },
        {
          title: 'QWE4',
          img: 'qwe4',
          price: 4,
        },
        {
          title: 'QWE5',
          img: 'qwe5',
          price: 6,
        },
        {
          title: 'QWE6',
          img: 'qwe6',
          price: 6,
        },
        {
          title: 'QWE6',
          img: 'qwe6',
          price: 6,
        },
        {
          title: 'QWE7',
          img: 'qwe7',
          price: 7,
        },
        {
          title: 'QWE8',
          img: 'qwe8',
          price: 8,
        },
        {
          title: 'QWE9',
          img: 'qwe9',
          price: 9,
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
          {
            this.state.cards.map((el: TCard) => {
                return (<Card title={el.title} img = {el.img} price = {el.price} />)
            })
          }
         
        </div>
      </div>
    );
  }
}

export default MainPage;
