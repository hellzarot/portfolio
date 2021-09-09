import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Tools = () => {
    return (
        <div className="tools"> 
            <Navigation/>
            <div className="toolsContent">
                <div>
                    <h1>Mes Outils</h1>
                    <div className="contentText">
                    
                        <div clasName="iconTools"id="iconTools">Environnement LAMP</div>
                        <div clasName="iconTools"id="iconTools"> 
                            <i className="fab fa-html5" aria-hidden="true"id="iconHtml"></i>
                            <div className="iconToolsText">HTML</div>
                        </div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-css3-alt" aria-hidden="true"id="iconCss"></i></div><div className="iconToolsText">CSS</div></div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-php" aria-hidden="true"id="iconPhp"></i></div><div className="iconToolsText">PHP</div></div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-symfony" aria-hidden="true"id="iconSymfony"></i></div><div className="iconToolsText">Symfony</div></div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-js" aria-hidden="true"id="iconJs"></i></div><div className="iconToolsText">JavaScript</div></div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-react" aria-hidden="true"id="iconReact"></i></div><div className="iconToolsText">REACT</div></div>
                        <div clasName="iconTools"id="iconTools"> <img src="./mariadb.png" alt="logo maria db" id="mariaDB"></img><div className="iconToolsText">MariaDB</div></div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-github" aria-hidden="true"id="iconGitHub"></i></div><div className="iconToolsText">GitHub</div></div>
                        
                        
                    </div>
                
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Tools;