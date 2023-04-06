import React, { FC, ReactElement, useEffect, useState } from "react";
import './Pagination.scss';
import PaginationCell from "../PaginationCell/PaginationCell";

type TProps = {
    countOfPaginationCells: number
}
const Pagination: FC<TProps> = ({countOfPaginationCells}):React.ReactElement => {
    const [pagArray, setPaginationArray] = useState<ReactElement[]>([]);

    useEffect(()=>{
        let tempPagArray: ReactElement[] = pagArray;
        for (let i: number =0; i<Math.ceil(countOfPaginationCells/20); i++) {
            tempPagArray.push(
                <PaginationCell 
                    innerNumber={i} 
                    key = {i}/>
            )
        };
        setPaginationArray(tempPagArray);
    },[])
    return (
        <div className="Pagination">                  
            {pagArray}
        </div>
    )
}

export default Pagination;