import React from 'react';
import Navigation from '../components/Navigation';


const Tools = () => {
    return (
        <div>
            <Navigation/>
            <div className="toolsContent">
                <div>
                    <h1>Mes Outils</h1>
                    <div className="contentText">
                    
                        <div clasName="iconTools"id="iconTools">Environnement LAMP</div>
                        <div clasName="iconTools"id="iconTools"> 
                            <i className="fab fa-html5" aria-hidden="true"id="iconHtml"></i>
                            <div id="iconToolsText">HTML</div>
                        </div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-css3-alt" aria-hidden="true"id="iconCss"></i></div>CSS</div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-php" aria-hidden="true"id="iconPhp"></i></div>PHP</div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-symfony" aria-hidden="true"id="iconSymfony"></i></div>Symfony</div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-js" aria-hidden="true"id="iconJs"></i></div>JS</div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-react" aria-hidden="true"id="iconReact"></i></div>REACT</div>
                        <div clasName="iconTools"id="iconTools"> <img src="./mariadb.png" alt="logo maria db" id="mariaDB"></img>MariaDB</div>
                        <div clasName="iconTools"id="iconTools"> <div><i className="fab fa-github" aria-hidden="true"id="iconGitHub"></i></div>GitHub</div>
                        
                        
                    </div>
                
                </div>
            </div>

        </div>
    );
};

export default Tools;