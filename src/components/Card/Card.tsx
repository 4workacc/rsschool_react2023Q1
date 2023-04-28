import React, { FC } from 'react';
import './Card.scss';
import { TRickAndMortyCharacter } from 'types';
import { useFullStateDispatch } from '../../redux/store';
import { actions as bigCardAction } from '../../redux/reducers/bigCardReducer';

type TProps = {
  data: TRickAndMortyCharacter;
};

const Card: FC<TProps> = ({ data }) => {
  const dispatch = useFullStateDispatch();
  return (
    <div
      className="Card"
      onClick={() => {
        dispatch(
          bigCardAction.setBigCardValue({
            isShow: true,
            cardData: data,
          })
        );
      }}
    >
      <h2>{`Name: ${data.name}`}</h2>
      <img src={data.image} className="Card_img" title={data.image} />
      <h5>{`Status: ${data.status}`}</h5>
      <h5>{`species: ${data.species}`}</h5>
      <h5>{`type: ${data.type}`}</h5>
      <h5>{`gender: ${data.gender}`}</h5>
      <h5>{`created: ${data.created}`}</h5>
    </div>
  );
};

export default Card;
