import React, { FC } from "react"

import './BigCard.scss';

type TProps = {
    onClick(): void
}

const BigCard: FC<TProps> = ({ onClick }): React.ReactElement => {
    return (
        <div className="BigCard">
            <button onClick={onClick}>X</button>
        </div>
    )
}

export default BigCard;
