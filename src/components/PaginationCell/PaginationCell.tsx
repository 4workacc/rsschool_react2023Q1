import React, { FC } from "react"

type TProps = {
    innerNumber: number
}

const PaginationCell: FC<TProps> = ({innerNumber}):React.ReactElement => {
    return (
        <div className="PaginationCell">
            <h1>{innerNumber+1}</h1>
        </div>
    )
}
export default PaginationCell;
