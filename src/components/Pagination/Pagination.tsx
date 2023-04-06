import React, { FC, ReactElement, useEffect, useState } from "react";
import './Pagination.scss';
import PaginationCell from "../PaginationCell/PaginationCell";

type TProps = {
    countOfPaginationCells: number;
    getPageByNumber(pageNumber: number): void
}
const Pagination: FC<TProps> = ({countOfPaginationCells, getPageByNumber}):React.ReactElement => {
    const [pagArray, setPaginationArray] = useState<ReactElement[]>([]);

    useEffect(()=>{
        let tempPagArray: ReactElement[] = pagArray;
        for (let i: number =0; i<countOfPaginationCells; i++) {
            tempPagArray.push(
                <PaginationCell 
                    innerNumber={i} 
                    key = {i}
                    clickHandler = {(i)=>getPageByNumber(i)}/>
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