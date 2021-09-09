import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="navbar">
                <ul className="navbarUl">
                    <li className="navbarLi">
                    <NavLink exact to="/" activeClassName="nav-active">
                        <span>Acceuil</span>
                    </NavLink> 
                    </li>
                    <li className="navbarLi">
                    <NavLink exact to="/a_propos" activeClassName="nav-active">
                        <span>Qui suis-je ?</span>
                    </NavLink> 
                    </li>
                    <li className="navbarLi">
                    <NavLink exact to="/contact" activeClassName="nav-active">
                        <span>Contact</span>
                    </NavLink> 
                    </li>
                    <li className="navbarLi">
                    <NavLink exact to="/competences" activeClassName="nav-active">
                        <span>Mes compétences</span>
                    </NavLink> 
                    </li>
                    <li className="navbarLi">
                    <NavLink exact to="/mes_outils" activeClassName="nav-active">
                        <span>Mes outils</span>
                    </NavLink> 
                    </li>
                </ul>
            
        </div>
    );
};

export default Navigation;