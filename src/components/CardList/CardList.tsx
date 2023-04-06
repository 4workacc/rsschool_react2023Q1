import Card from "../Card/Card";
import React, { FC } from "react";
import { TMainFormCards, TRickAndMortyCharacter } from "types";

const CardList: FC<TMainFormCards> = ({cards}):React.ReactElement => {
    return(
        <div>
            <div className="MainForm_Cards">
            <ul>
                {cards.map((el: TRickAndMortyCharacter, i:number ) => {
                    return (
                        <Card data={el} key={i} onClick={()=>{}}/>    
                    )
                })}
            </ul>
            </div>
            <div className="MainForm_BigCard">
                
            </div>
        </div>
    )
}

export default CardList;