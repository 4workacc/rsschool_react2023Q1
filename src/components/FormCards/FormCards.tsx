import React, { FC, ReactElement } from 'react';

import './FormCards.scss';
import { TFormCardData } from 'types';
import FormCard from '../FormCard/FormCard';
import { useFullStateSelector } from '../../redux/store';


const FormCards: FC = () => {
  const formCards: TFormCardData[] = useFullStateSelector((state) => state.formReducer.formCards);
  return (
    <div className="FormCards">
      {formCards.map((card: TFormCardData) => {
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
      {formCards!.length === 0 && <h1>noCard Data</h1>}
    </div>
  );
};
export default FormCards;
