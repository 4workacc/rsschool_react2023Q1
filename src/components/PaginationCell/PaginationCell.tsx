import React, { FC } from "react"

type TProps = {
    innerNumber: number;
    clickHandler(pageNumber: number): void;
}

const PaginationCell: FC<TProps> = ({innerNumber, clickHandler}):React.ReactElement => {
    return (
        <div 
            className="PaginationCell"
            onClick={()=>{clickHandler(innerNumber)}} >
            <h1>{innerNumber+1}</h1>
        </div>
    )
}
export default PaginationCell;
