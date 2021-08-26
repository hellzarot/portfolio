import React from "react";

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

              handleFormSubmit( Event ) {
                Event.preventDefault();
                console.log(this.state);
              }
              

        render () {
        return(
                
        <div className="contactContent">
                    <h1>Contactez Moi</h1>
                <div>
                        <form action="http://localhost:8000/api/contact/action_contact.php" method="POST">
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
                        <input type="submit"  value="Envoyez"/>
                        </form>
                </div>
        </div>  
        )
        }
}

export default ContactForm;