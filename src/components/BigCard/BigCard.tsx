import React, { FC } from 'react';

import './BigCard.scss';
import { TRickAndMortyCharacter } from 'types';

type TProps = {
  onClick(): void;
  cardData: TRickAndMortyCharacter;
};

const BigCard: FC<TProps> = ({ onClick, cardData }): React.ReactElement => {
  return (
    <div className="BigCard">
      <button onClick={onClick}>X</button>
      <h1>{cardData.name}</h1>
    </div>
  );
};
export default BigCard;
