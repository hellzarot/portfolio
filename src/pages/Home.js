import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <div className="contentText">
                        <h1> Bonjour ! Je suis un développeur Back-end</h1>
                        <p>Je travaille quotidiennement sur des languages back tels que symfony mais je ne perds pas la main avec Html, Css, PHP, JavaScript et je me perfectionne sur React et Redux pour faire un peu de front-end.</p>
                        <p >Si j'ai appris quelque chose avec le developpement web c'est qu'il est impossible de tout savoir, mais savoir où est l'information c'est la clé, cela me rappelle mon ancienne vie (la biologie).</p>
                        <p >Vous êtes intéressé(e) par mon profil ?  <Link to="/contact" classNeme="linkContact">Contactez-moi via le formulaire ici</Link></p>
                        
            
                            <div className="dllCV">
                                <a 
                                href="/CV Julien Lambin.pdf" 
                                download 
                                title="Cv téléchargeable de Julien_Lambin"
                                target="_blank">Téléchargez mon CV (format pdf)</a>
                            </div>
                    </div> 
                    <div className="ProfileHome">
                    <img 
                        className="pictureProfileHome"
                        src="/julienLambin.jpg" 
                        alt="Julien_Lambin"
                        title="Julien Lambin"/>
                    </div>
                </div>

                

            </div>
            <Footer/>
        </div>
        
    );
};

export default Home;