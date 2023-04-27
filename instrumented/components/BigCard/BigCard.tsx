import React, { FC } from 'react';
import { actions as bigCardAction } from '../../redux/reducers/bigCardReducer';
import { useFullStateDispatch } from '../../redux/store';

import './BigCard.scss';
import { TRickAndMortyCharacter } from 'types';
import { useFullStateSelector } from '../../redux/store';

type TProps = {
  cardData?: TRickAndMortyCharacter;
};


const BigCard: FC<TProps> = (): React.ReactElement => {
  const dispatch = useFullStateDispatch();
  const bigCardData = useFullStateSelector((state) => state.cardReducer.cardData!);
 
  return (
    <div className="BigCard">
      <button onClick={()=>{
        dispatch(bigCardAction.hideBigCard())
      }}>X</button>
      <h1>{bigCardData.name}</h1>
      <img src={bigCardData.image} className="Card_img" title={bigCardData.image} />
      <h5>{`Status: ${bigCardData.status}`}</h5>
      <h5>{`species: ${bigCardData.species}`}</h5>
      <h5>{`type: ${bigCardData.type}`}</h5>
      <h5>{`gender: ${bigCardData.gender}`}</h5>
      <h5>{`created: ${bigCardData.created}`}</h5>
    </div>
  );
};
export default BigCard;
