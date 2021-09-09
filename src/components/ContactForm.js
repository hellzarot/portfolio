import React from "react";
import axios from 'axios';

//const API_PATH = 'http://localhost:8000/api/contact/action_contact.php';
const API_PATH = 'https://lambin.info/api/contact/action_contact.php';

class ContactForm extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                  fname: '',
                  lname: '',
                  email: '',
                  emailError: '',
                  message: '',
                  mailSent: false,
                  error: null,
                }
              }
            isEmail() {
                 
            
               
                let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if(this.state.email.match(regex)) {
                  return true;
                }
                else {
                  this.setState({
                    emailError: true
                    
                  })
                }
              

            }

              handleFormSubmit = e => {
                e.preventDefault();
               
                  if(this.state.fname && this.state.lname && this.isEmail() && this.state.message){
                    axios({
                      method: 'post',
                      url: `${API_PATH}`,
                      headers: { 'content-type': 'application/json',
                      mode: 'cors',
                      credentials: 'include' },
                      data: this.state
                      
                    })
                   
                      .then(result => {
                        this.setState({
                          mailSent: result.data.sent
                        })
                      })
                     
                      .catch(error => this.setState({ error: error.message }));
                      this.setState({
                        fname: '',
                        lname: '',
                        email: '',
                        emailError: '',
                        message: '',
                        mailSent: false,
                        error: null,
                      })
                  }
                  else {
                    this.setState({
                      error: true
                    })
                  }
                  
                  }
                 
              
              

        render () {
        return(
                
        <div className="contactContent">
                    <h1>Contactez Moi</h1>
                <div>
                        <form action="#" >
                        <label for="fname">Prénom</label>
                        <input type="text"id="fname"name="firstname"placeholder="Votre prénom *" value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}/>
                          

                        <label for="lname">Nom</label>
                        <input type="text"id="lname" name="lastname" placeholder="Votre nom *" value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}/>


                        <label for="email">Email</label>
                        <input type="email"id="email"name="email"placeholder="Votre email *" value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}/>
    
                          <div className="contactError">{this.state.emailError &&
                                <div>Merci de mettre un email valide !</div>
                                }
                          </div>

                        <label for="message">Messsage</label>
                        <textarea id="message"name="message"placeholder="M'écrire un message *" value={this.state.message}
    onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)}  value="Envoyer le message" />
                        <div className="contactResponse">
                                {this.state.mailSent &&
                                <div>Merci de m'avoir contacté.</div>
                                }
                         </div>
                         <div className="contactError">
                                {this.state.error &&
                                <div>Merci de compléter correctement le formulaire .</div>
                                }
                         </div>
                        </form >
                </div>
        </div>  
        )
        }
}

export default ContactForm;