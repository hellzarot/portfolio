import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            
            <div class="aboutContent">
            <div class="contentText">
                <h1>Je me présente</h1>
                <p class="introductionPar">Bonjour ! Moi, c'est Julien. J'ai 32 ans, né dans le var, j'ai fais des études de biologie sur Nice.</p>
                <p class="introductionPar">Reconverti dans le domaine du développement Web, .</p>
                <p class="introductionPar">Passioné par la nature, le jardinage, je suis souvent en rendonée, que ce soit à proximitée ou bien en montagne dans les alpes.</p>
                <p class="introductionPar">Depuis peu j'ai un rucher de deux ruches que je souhaite développer.</p>
            </div>
    </div>
        </div>
    );
};

export default About;