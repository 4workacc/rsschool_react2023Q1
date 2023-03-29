import React from 'react';
import default_img from '../../assets/default-image.jpg';
import './Card.scss';

type Props = {
  title: string;
  img: string;
  price: number;
  date: string;
  color: 'red' | 'green' | 'black';
  isAvalible: boolean;
  boxSize: 'small' | 'medium' | 'big';
};
class Card extends React.Component<Props> {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.img ? default_img : default_img}
          className="Card_img"
          title={this.props.img}
        />
        <h5>{`price: ${this.props.price} $`}</h5>
        <h5>{`Date: ${this.props.date}`}</h5>
        <h5>{`Color: ${this.props.color}`}</h5>
        <h5>{`isAvalible: ${this.props.isAvalible}`}</h5>
        <h5>{`Box size: ${this.props.boxSize}`}</h5>
      </div>
    );
  }
}

export default Card;
