import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';

const Graph = (props) => {
    const { listeCoups } = props;

    /*
    const data2 = [
        {codeOk: 12, codeBug: 14, codeIa: 17}, 
        {codeOk: 16, codeBug: 44, codeIa: 22}, 
        {codeOk: 34, codeBug: 30, codeIa: 4}, 
        {codeOk: 22, codeBug: 11, codeIa: 78}, 
        {codeOk: 72, codeBug: 5, codeIa: 100}
    ];
    */

    let scoreOk=0;
    let scoreBug=0;
    let scoreIa=0;
    if (listeCoups.length!==0) {
        scoreOk=listeCoups[listeCoups.length-1].codeOk;
        scoreBug=listeCoups[listeCoups.length-1].codeBug;
        scoreIa=listeCoups[listeCoups.length-1].codeIa;
    }
    return (
        <div>
            {scoreOk}% {scoreBug}% {scoreIa}%
            <div>
                <LineChart width={730} height={250} data={props.listeCoups} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="codeOk" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="codeBug" stroke="#c0392b" />
                    <Line type="monotone" dataKey="codeIa" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default Graph;
