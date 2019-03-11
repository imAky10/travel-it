import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container-fluid">
        <div className="carousel slide" id="demo" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" className="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					</ul>
					<div className="carousel-inner">
						<div className="carousel-item active"><img src={require("./images/2.jpg")} alt="pics" />
							<div className="carousel-caption">
								<h1 className="text-light">Discover The World...</h1>
								<p className="text-light"><i><b>We guide you to make it memorable</b></i></p>
							</div>
						</div>
						<div className="carousel-item"><img src={require("./images/1.jpg")} alt="pics" />
							<div className="carousel-caption">
								<h1 className="text-light">Discover The World...</h1>
								<p className="text-light"><i><b>We guide you to make it memorable</b></i></p>
							</div>
						</div>
						<div className="carousel-item"><img src={require("./images/3.jpg")} alt="pics" />
							<div className="carousel-caption">
								<h1 className="text-light">Discover The World...</h1>
								<p className="text-light"><i><b>We guide you to make it memorable</b></i></p>
							</div>
						</div>
					</div>

					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span></a>

						<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
        <br />

        <div className="bg" id="tourist">
						<h1 className="text-danger"><strong><u>Tourist Destinations</u></strong></h1>
						<br />
						<div className="container-fluid">
						<Link to="/himachal-pradesh">
						 <Button variant="outline-success" size="lg" data-toggle="tooltip" title="Himachal Pradesh Tourism"><b>Himachal Pradesh</b></Button>
						</Link>
						<Link to="/uttarakhand"> 
							<Button variant="outline-primary" size="lg" data-toggle="tooltip" title="Uttarakhand Tourism"><b>Uttarakhand</b></Button>
						</Link>
						<Link to="/goa">
						 <Button variant="outline-info" size="lg" data-toggle="tooltip" title="Goa Tourism"><b>Goa</b></Button>
						</Link>
						<Link to="/tamilnadu">
						 <Button variant="outline-success" size="lg" data-toggle="tooltip" title="Tamil Nadu Tourism"><b>Tamil Nadu</b></Button>
						</Link>
						<Link to="/jammu-kashmir">
						 <Button variant="outline-danger" size="lg" data-toggle="tooltip" title="Jammu and Kashmir Tourism"><b>Jammu and Kashmir</b></Button>
						</Link>
						<Link to="/maharashtra">
						 <Button variant="outline-dark" size="lg" data-toggle="tooltip" title="Maharashtra Tourism"><b>Maharashtra</b></Button>
						</Link>
						<Link to="/kerala">
						 <Button variant="outline-danger" size="lg" data-toggle="tooltip" title="Kerala Tourism"><b>Kerala</b></Button>
						</Link>
						<Link to="/gujarat">
						 <Button variant="outline-primary" size="lg" data-toggle="tooltip" title="Gujarat Tourism"><b>Gujarat</b></Button>
						</Link>
						<Link to="/rajasthan">
						 <Button variant="outline-warning" size="lg" data-toggle="tooltip" title="Rajasthan Tourism"><b>Rajasthan</b></Button>
						</Link>
						<Link to="/delhi">
						 <Button variant="outline-dark" size="lg" data-toggle="tooltip" title="Delhi Tourism"><b>Delhi</b></Button>
						</Link>
						<Link to="/sikkim">
						 <Button variant="outline-primary" size="lg" data-toggle="tooltip" title="Sikkim Tourism"><b>Sikkim</b></Button>
						</Link>
						</div>			
					</div>
          <br />
          <section className="about-section">
						<div className="container-fluid">
							<br />
							<h1 className="text-primary text-center"><strong>About Us</strong></h1>
							<br />
							<div className="row">
								<div className="col-lg-4 col-md-6 col-sm-8 col-8 mx-auto mb-4">
									<div className="about-left mx-auto">
										<h1 className="text-light text-center">TravelX</h1>
									</div> 
								</div>
								<div className="col-lg-8 col-md-6 col-sm-9 col-8 mx-auto mb-4">
									<div className="about-right">
										<h3 className="text-muted text-center">Our Mission</h3>
										<p className="text-primary text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...  <Link to="/about" class="text-muted read-link">Read More</Link> </p>
									</div> 
								</div>
							</div>
						</div>
					</section>
        <br />
      </div>
      </div>
    )
  }
}

export default Home
