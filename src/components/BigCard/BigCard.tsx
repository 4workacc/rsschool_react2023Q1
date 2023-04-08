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
      <img src={cardData.image} className="Card_img" title={cardData.image} />
        <h5>{`Status: ${cardData.status}`}</h5>
        <h5>{`species: ${cardData.species}`}</h5>
        <h5>{`type: ${cardData.type}`}</h5>
        <h5>{`gender: ${cardData.gender}`}</h5>
        <h5>{`created: ${cardData.created}`}</h5>
    </div>
  );
};
export default BigCard;
