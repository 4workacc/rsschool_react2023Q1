import React, { FC } from 'react';

type TCardList = {
  cards: TRickAndMortyCharacter[];
};

import './CardList.scss';
import { TRickAndMortyCharacter } from 'types';
import Card from '../Card/Card';

const CardList: FC<TCardList> = ({ cards }): React.ReactElement => {
  return (
    <div className="MainForm_Cards">
      {cards.map((el: TRickAndMortyCharacter, i: number) => {
        return <Card data={el} key={i} />;
      })}
    </div>
  );
};

export default CardList;
