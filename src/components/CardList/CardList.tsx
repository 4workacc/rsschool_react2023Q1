import Card from '../Card/Card';
import React, { FC } from 'react';
import { TMainFormCards, TRickAndMortyCharacter } from 'types';

import './CardList.scss';

const CardList: FC<TMainFormCards> = ({
  cards,
  showModalHandler,
  hideModalHandler,
  sendDataToParent,
}): React.ReactElement => {
  return (
    <div className="MainForm_Cards">
      {cards.map((el: TRickAndMortyCharacter, i: number) => {
        return (
          <Card
            data={el}
            key={i}
            showModal={() => showModalHandler!()}
            hideModal={() => hideModalHandler}
            sendDataToParent={(data) => {
              sendDataToParent(data);
            }}
          />
        );
      })}
    </div>
  );
};

export default CardList;
