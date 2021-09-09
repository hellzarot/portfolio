import React from 'react';

import { Link } from 'react-router-dom';


// == Composant
const Footer = () => (
  <div className="footer">
      <div clasName="footerUp" id="footerUp">
        <div id="linkedin"> <div><i className="fab fa-linkedin" aria-hidden="true"id="iconlinkedin"></i></div><div className="iconFooterLinkedin"></div><a href="https://www.linkedin.com/in/lambin-julien">Linkedin</a></div>
       
         <div><Link to="/a_propos">À propos</Link></div>
        <div> <Link to="/contact">Contact</Link></div>
      </div>
      <div className="footerDown">
        <p class="copyright">
							© 2021 Julien Lambin, Tous droits réservés.
				</p>
      </div>
    
    
  </div>
);

// == Export
export default Footer;