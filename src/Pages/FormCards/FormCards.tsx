import Card from '../../components/Card/Card';
import { TStorageData } from 'Pages/Form/Form';
import React, { ReactElement } from 'react';

import './FormCards.scss';

type TProps = {
  cards: TStorageData[];
};

const FormCards = ({ cards }: TProps): ReactElement => {
  return (
    <div className="FormCards">
      {cards.map((card: TStorageData) => {
        return (
          <Card
            title={card.title!}
            img={card.img!}
            price={+card.price!}
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
