import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <div className="contentText">
                        <h1> Bonjour ! Je suis un développeur Back-end</h1>
                        <p>Je travaille quotidiennement sur des languages back tels que symfony mais je ne perds pas la main avec Html, Css, JavaScript et je me perfectionne sur React et Redux pour faire un peu de front-end.</p>
                        <p >Si j'ai appris quelque chose avec le developpement web c'est qu'il est impossible de tout savoir, mais savoir ou est l'information c'est la clé, cela me rappelle mon ancienne vie (la biologie).</p>
                        <p >Vous êtes intéressé(e) par mon profil ? Contactez-moi via le formulaire</p>
            
                            <div className="dllCV">
                                <a 
                                href="./assets/CV Julien Lambin.pdf" 
                                download 
                                title="Cv téléchargeable de Julien_Lambin"
                                target="_blank">Téléchargez mon CV (format pdf)</a>
                            </div>
                    </div> 
                    <div className="ProfileHome">
                    <img 
                        className="pictureProfileHome"
                        src="https://scontent-mrs2-2.xx.fbcdn.net/v/t1.6435-9/132833711_10223830610571247_5400426451418907550_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8DtFU9b7_H8AX9cKp0n&tn=MklpDiBYCV6EvFAR&_nc_ht=scontent-mrs2-2.xx&oh=e558438f6257ca6da7cbd8813120b1f4&oe=61211A48" 
                        alt="profile Julien_Lambin"
                        title="Photo de cv de Julien_Lambin"/>
                    </div>
                </div>

                

            </div>
        </div>
        
    );
};

export default Home;