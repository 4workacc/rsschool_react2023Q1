import React from 'react';
import './Card.scss';
import { TRickAndMortyCharacter } from 'types';

type Props = {
  data: TRickAndMortyCharacter;
  onClick(): void;
};

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="Card">
        <button onClick={()=>this.props.onClick()}></button>
        <h2>{`Name: ${this.props.data.name}`}</h2>
        <img
          src={this.props.data.image}
          className="Card_img"
          title={this.props.data.image}
        />
        <h5>{this.props.data.image}</h5>
        <h5>{`Status: ${this.props.data.status} $`}</h5>
        <h5>{`species: ${this.props.data.species}`}</h5>
        <h5>{`type: ${this.props.data.type}`}</h5>
        <h5>{`gender: ${this.props.data.gender}`}</h5>
        <h5>{`created: ${this.props.data.created}`}</h5>
      </div>
    );
  }
}

export default Card;
