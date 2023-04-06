import React, { FC } from "react";

type TProps = {
    visibleState: 'hidden' | 'visible';
}

const Modal: FC<TProps> = ({visibleState}): React.ReactElement => {
    return (
        <div>
            <div className={`ModalBig ${visibleState}`}>
            </div>
            <div className="ModalInfo">
                <h1>Modal</h1>
            </div>
        </div>

    )
}