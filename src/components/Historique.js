import React from 'react';

const Historique = () => {
    let historique = JSON.parse(localStorage.getItem("historique"));
    console.log(historique);

    if(historique == null){
        historique = [];
    }
    return (
        <div>
            <div className="historiqueParties">
                {historique.map((partie) => (
                    <div>
                        <span className="historiqueDate">Date : {partie.date} </span>
                        <span className="historiqueDate">Résultat : {partie.resultat} </span>
                        <span className="historiqueDate">Code Ok : {partie.codeOk} </span>
                        <span className="historiqueDate">Code buggé : {partie.codeBug} </span>
                        <span className="historiqueDate">Code IA : {partie.codeIa} </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Historique;