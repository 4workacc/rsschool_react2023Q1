import React from 'react';
import './Card.scss';

type Props = {
  title: string;
  img: string;
  price: number;
};
class Card extends React.Component<Props> {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <h3>{this.props.img}</h3>
        <h5>{`price: ${this.props.price} $`}</h5>
      </div>
    );
  }
}

export default Card;