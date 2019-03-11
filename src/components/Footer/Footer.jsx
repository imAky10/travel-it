import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className=" bg-dark">
			<div className="container-fluid">
			<div className="footer row">
				<div className="footerContent col-lg-3 col-md-6 col-12 mx-auto mb-4 logo">
					<h1 className="text-info text-center">TravelX</h1>
				</div>
				<div className="footerContent col-lg-3 col-md-6 col-12 mx-auto mb-4">
					<ul className="text-center">
						<li><Link to="/" className="text-info">Home</Link></li>
						
						<li><Link to="/destination" className="text-info">Destinations</Link></li>
						<li><Link to="/about" className="text-info active">About Us</Link></li>
						<li><Link to="/contact" className="text-info">Contact</Link></li>
						
					</ul>
				</div>
				<div className="footerContent col-lg-3 col-md-6 col-12 text-center mx-auto mb-4">
					<h4>For Assistance</h4>
					<address className="text-light">Room No. 10, Limbdi Hostel,<br /> IIT (BHU) Varanasi,<br /> Varanasi - 221005</address>
				</div>

				<div className="footerContent col-lg-3 col-md-6 col-12 mx-auto mb-4 text-center">
					<h4>Contact Information</h4>
					<address className="text-light">amit.aky10@xyz.com</address>
					<address className="text-light">91-7997329202</address>
				</div>
			</div>
			<div className="copyright">
							<p className="text-light text-left col-lg-12 text-center">&copy; All Rights Reserved 2019</p>
							
						</div>
			</div>
		</footer>
      </div>
    )
  }
}

export default Footer
