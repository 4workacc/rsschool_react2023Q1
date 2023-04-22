import React, { FC } from 'react';
import { TFormCardData } from 'types';

import './FormCard.scss';

const FormCard: FC<TFormCardData> = (data: TFormCardData): React.ReactElement => {
  return (
    <div className="FormCard">
      <h1>{data.title}</h1>
      <img title={data.img}></img>
      <h2>{`Price: ${data.price}`}</h2>
      <h2>{`Color: ${data.color}`}</h2>
      <h2>{`Size: ${data.boxSize}`}</h2>
    </div>
  );
};
export default FormCard;
