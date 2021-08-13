import React from 'react';

const Score = (props) => {
    const { texte } = props;
    const { nombre } = props;

    return (
        <div>
            {texte} : {nombre}%
            <div>
            </div>
        </div>
    );
};

export default Score;
