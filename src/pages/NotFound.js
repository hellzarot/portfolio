import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFoundContent">
            <div className="notFoundContent">
                <h3>Désolé cette Page n'existe pas !</h3>
                <NavLink exact to="/">
                    <i class="fa-fa-home"></i>
                    <span ClassName="notFoundLink"> Acceuil</span>
                </NavLink>


            </div>
        </div>
    );
};

export default NotFound;