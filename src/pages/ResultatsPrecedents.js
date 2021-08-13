import React from 'react';
import Historique from '../components/Historique';
import Navigation from '../components/Navigation';

const ResultatsPrecedents = () => {
    return (
        <div>
            <Navigation/>
           <h1>Résultats précédents</h1> 
           <Historique/>
        </div>
    );
};

export default ResultatsPrecedents;