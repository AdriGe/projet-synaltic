import React from 'react';

const Bouton = (props) => {

    return (
            <button className={props.className} onClick={props.fonction}>
                {props.texteBouton}
            </button>
    );
};


export default Bouton;