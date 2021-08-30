import React from 'react';
import Navigation from '../components/Navigation';

const Skills = () => {
    return (
        <div>
            <Navigation/>
                <div class="skillsContent">
                <h1>Skills</h1>
yarn import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

                <div className="contentText frontEnd">
                    
                
                    <i class="fas fa-code"></i>
                
                    <h2>Front-End</h2>
                
                    <p>Au cours de mes expériences passées, j'ai pu développer les compétences professionnelles suivantes:</p>
                    <ul>
                    <li>Maquetter une application</li>
                    <li>Réaliser une interface utilisateur responsive statique</li>
                    <li>Réaliser une interface utilisateur responsive dynamique</li>
                    <li>Réaliser une interface utilisateur avec une solution de gestion de contenu</li>
                    </ul>
                </div>
                
                <div class="contentText backEnd">
                
                    <i class="fas fa-database"></i>
                
                    <h2>Back-End</h2>
                
                    <p>Au cours de mes expériences passées, j'ai pu développer les compétences professionnelles suivantes:</p>
                    <ul>
                        <li>Créer une base de données</li>
                        <li>Développer les composants d'accès aux données</li>
                        <li>Développer la partie back-end d'une application web ou mobile</li>
                        <li>Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu</li>
                    </ul>
                </div>
                

                <div class="contentText webQuality">
                
                    <i class="far fa-thumbs-up"></i>
                
                    <h2>Qualité Web</h2>
            
                    <p>Certifié Opquast avec un score de 820/1000, je suis en capacité de:</p>
                    <ul>
                        <li>Prendre en compte la diversité et les exigeances des utilisateurs</li>
                        <li>Connaître les bonnes pratiques, leur conception et leur utilisation</li>
                        <li>Utiliser une check-list qualité Web</li>
                        <li>Prévenir les risques, renforcer l'assurance qualité Web</li>
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default Skills;