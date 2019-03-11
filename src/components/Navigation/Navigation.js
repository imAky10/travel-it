import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-md navbar-light bg-info ">

          <Link className="navbar-brand" to="/"><b>TravelX</b></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">

            <ul className="navbar-nav mx-auto navigation">
              <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>

              <li className="nav-item dropdown"><Link to="/destination" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Destinations</Link>
                <div className="dropdown-menu text-center">
                  <Link to="/delhi" className="dropdown-item">Delhi</Link>
                  <Link to="/goa" className="dropdown-item">Goa</Link>
                  <Link to="/gujarat" className="dropdown-item">Gujarat</Link>
                  <Link to="/himachal-pradesh" className="dropdown-item">Himachal Pradesh</Link>
                  <Link to="/jammu-kashmir" className="dropdown-item">Jammu & Kashmir</Link>
                  <Link to="/kerala" className="dropdown-item">Kerala</Link>  
                  <Link to="/maharashtra" className="dropdown-item">Maharashtra</Link>
                  <Link to="/rajasthan" className="dropdown-item">Rajasthan</Link>
                  <Link to="/sikkim" className="dropdown-item">Sikkim</Link>
                  <Link to="/tamilnadu" className="dropdown-item">Tamil Nadu</Link>
                  <Link to="/uttarakhand" className="dropdown-item">Uttarakhand</Link>
                </div>
              </li>
              <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>


        </div>

      </div>
    )
  }
}

export default Navigation
