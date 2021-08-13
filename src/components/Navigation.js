import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/zone-de-code" activeClassName="nav-active">
                Zone De Code
            </NavLink>
            <NavLink exact to="/resultats-precedents" activeClassName="nav-active">
                Résultats Précédents
            </NavLink>            
        </div>
    );
};

export default Navigation;