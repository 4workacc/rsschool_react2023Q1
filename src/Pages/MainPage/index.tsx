import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { FC, ReactElement, useState } from 'react';

import './index.scss';

type TCard = {
  id: number;
  title: string;
  fileValue: string;
  price: number;
  date: string;
  color: 'red' | 'green' | 'black';
  isAvalible: boolean;
  boxSize: 'small' | 'medium' | 'big';
};

type Cards = {
  cards: TCard[];
};

const MainPage: FC<Cards> = ({}): ReactElement => {
  const [cards] = useState<TCard[]>([
    {
      id: 0,
      title: 'Mock0',
      fileValue: 'Moch1',
      price: 1,
      date: '2023-03-31',
      color: 'red',
      isAvalible: true,
      boxSize: 'small',
    },
    {
      id: 1,
      title: 'Mock1',
      fileValue: 'Moch1',
      price: 11,
      date: '2023-03-31',
      color: 'red',
      isAvalible: true,
      boxSize: 'small',
    },
  ]);
  return (
    <div className="MainPage">
      <SearchBar />
      <div className="Cards">
        {cards.map((el: TCard) => {
          return (
            <Card
              title={el.title}
              img={el.fileValue}
              price={el.price}
              key={el.id}
              date={el.date}
              color={el.color}
              isAvalible={el.isAvalible}
              boxSize={el.boxSize}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainPage;
