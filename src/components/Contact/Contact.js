import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="text-danger heading">Contact Us</h1><br />

        
        <form>
          
          <div className="container outer-box">
          <div className="form-group d-flex flex-wrap">

            <input type="text" className="form-control box" id="name" placeholder=" First Name" />
            <input type="text" className="form-control box" id="last-name" placeholder=" Last Name" />
            <input type="email" className="form-control box" id="email" placeholder=" Email" />
            <input type="tel" className="form-control box" id="phone" placeholder=" Phone Number" />

            <textarea className="form-control box" rows="5" id="comment" placeholder=" Message/Suggestion/Query"></textarea>

            
          </div>
            <button className="btn btn-outline-dark btn-lg mx-auto d-block">Send</button>

          </div>
        </form>
        <br /> <br /> <br />
      </div>
    )
  }
}

export default Contact
