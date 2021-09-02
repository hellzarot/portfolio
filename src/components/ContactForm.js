import React from "react";
import axios from 'axios';

const API_PATH = 'http://localhost:8000/api/contact/action_contact.php';

class ContactForm extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                  fname: '',
                  lname: '',
                  email: '',
                  message: '',
                  mailSent: false,
                  error: null,
                }
              }

              handleFormSubmit = e => {
                e.preventDefault();
                axios({
                  method: 'post',
                  url: `${API_PATH}`,
                  headers: { 'content-type': 'application/json' },
                  data: this.state
                })
                  .then(result => {
                    this.setState({
                      mailSent: result.data.sent
                    })
                  })
                  .catch(error => this.setState({ error: error.message }));
              };
              

        render () {
        return(
                
        <div className="contactContent">
                    <h1>Contactez Moi</h1>
                <div>
                        <form action="#">
                        <label for="fname">Prénom</label>
                        <input type="text"id="fname"name="firstname"placeholder="Votre prénom" value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}/>
                        <label for="lname">Nom</label>
                        <input type="text"id="lname" name="lastname" placeholder="Votre nom" value={this.state.lname}
    onChange={e => this.setState({ lname: e.target.value })}/>


                        <label for="email">Email</label>
                        <input type="email"id="email"name="email"placeholder="Votre email" value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}/>


                        <label for="message">Messsage</label>
                        <textarea id="message"name="message"placeholder="M'écrire un message" value={this.state.message}
    onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                        <div>
                                {this.state.mailSent &&
                                <div>Thank you for contcting us.</div>
                                }
                         </div>
                        </form >
                </div>
        </div>  
        )
        }
}

export default ContactForm;