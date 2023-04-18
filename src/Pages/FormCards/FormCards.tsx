import React, { ReactElement } from 'react';

import './FormCards.scss';
import { TReduxReducers, TStorageData } from 'types';
import { useSelector } from 'react-redux';
import FormCard from '../FormCard/FormCard';

const FormCards = (): ReactElement => {
  const cards: TStorageData[] = useSelector((state: TReduxReducers) => state.rootReducer.formData);
  return (
    <div className="FormCards">
      {cards.map((card: TStorageData) => {
        return (
          <FormCard
            title={card.title!}
            img={card.img!}
            price={card.price!}
            key={card.id}
            date={card.date!}
            color={card.color}
            isAvalible={card.isAvalible!}
            boxSize={card.boxSize}
          />
        );
      })}
    </div>
  );
};
export default FormCards;
