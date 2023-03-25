import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import React from 'react';

import './index.scss';

type Props = {
  pros?: number;
};

type TCard = {
  id: number;
  title: string;
  fileValue: string;
  price: number;
  date: string;
  color: "red" | "green" | "black";
  isAvalible: boolean;
  boxSize: "small" | "medium" | "big";
};

type Cards = {
  cards: TCard[];
};

class MainPage extends React.Component<Props, Cards> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }
  componentDidMount(): void {
    let dat = localStorage.getItem("StorageCards");
    this.setState({cards: dat ? JSON.parse(dat) : []})
  }
  render() {
    return (
      <div className="MainPage">
        <SearchBar />
        <div className="Cards">
          {this.state.cards.map((el: TCard) => {
            return <Card                   
                      title={el.title} 
                      img={el.fileValue} 
                      price={el.price} 
                      key={el.id} 
                      date={el.date}
                      color={el.color}
                      isAvalible={el.isAvalible}
                      boxSize={el.boxSize}
                      />;
          })}
        </div>
      </div>
    );
  }
}

export default MainPage;
