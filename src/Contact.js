import React, { Component } from 'react'
import SomeImage from './assets/contactpic.jpg'
class Contact extends Component {
  render() {
    return (
      <div className="contact_form"> 
        <div>
          <h2>Contact  Me</h2>
          <p>This is a contact form</p>
        </div>
         <div className="row">
          <div className="column">
            <img src={SomeImage}   alt="contact pic"/>
          </div>
           <div className="column">
              <form action="/action_page.php">
                <label for="first_name">First Name: </label>
                <input type="text" id="first_name" name="firstname" placeholder="Type in your first name"></input>
                <label for="last_name">Last Name: </label>
                <input type="text" id="last_name" name="lastname" placeholder="Type in your last name"></input>
                <label for="country">Where are you from?</label>
                <select id="country" name="country">
                  <option value="choose">Choose your region</option>
                  <option value="USA">Americas</option>
                  <option value="EMEA">EMEA region</option>
                  <option value="APAC">APAC region</option>
                </select>
                <label for="message">Message</label>
                <textarea id="message" name="message"  placeholder="Type in your message..." style={{height:178}}></textarea>
                <input type="submit" value="submit"></input>
              </form>
           </div>
         </div>
      </div>
    );
  }
}

export default Contact;