import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            
            <div class="aboutContent">
                <div class="contentText">
                    <h1>Je me présente</h1>
                    <p class="aboutText">Bonjour ! Moi, c'est Julien. J'ai 32 ans, né dans le var, j'ai fait des études de biologie sur Nice.</p>
                    <p class="aboutText">Reconverti dans le domaine du développement Web, un domaine qui me passionne et me stimule.</p>
                    <p class="aboutText">Passioné par la nature, le jardinage, je suis souvent en randonnée, que ce soit à proximité au bord de mer et dans les Maures ou bien en montagne dans les alpes.</p>
                    <p class="aboutText">Depuis peu j'ai un rucher de deux ruches que je souhaite développer l'an prochain pour approcher les dix ruches.</p>
                </div>
                <div classname="aboutVideo">
                    <h2>Video de présentation du projet de fin de formation</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Gbczg095K_A?start=411" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;