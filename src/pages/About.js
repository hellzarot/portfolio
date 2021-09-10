import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about">
            <Navigation/>
            
            <div class="aboutContent">
                <div class="contentText">
                    <h1>Je me présente</h1>
                    <p class="aboutText">Bonjour ! Moi, c'est Julien. J'ai 32 ans, né dans le var, j'ai fait des études de biologie sur Nice.</p>
                    <p class="aboutText">Reconverti dans le domaine du développement Web, un domaine qui me passionne et me stimule.</p>
                    <p class="aboutText">Passioné par la nature, le jardinage, je suis souvent en randonnée, que ce soit à proximité au bord de mer et dans les Maures ou bien en montagne dans les alpes.</p>
                    <p class="aboutText">Je tente de retrouver mon ancien niveau sur un vélo de route et retourner faire des grands cols.</p>
                    <p class="aboutText">Depuis peu j'ai un rucher de deux ruches que je souhaite développer l'an prochain pour approcher les dix ruches.</p>
                    <p class="aboutText">J'ai le projet de créer une application pour moi-meme de suivi pour l'apiculture et aussi de prévision des actions à réaliser.</p>
                </div>
                <div classname="aboutVideo">
                    <h2>Video de présentation du projet de fin de formation avec O'clock</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Gbczg095K_A?start=411" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;