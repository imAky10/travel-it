import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container-fluid">
        <div className="jumbotron jumbo">
          <h1 className="text-light">TravelX</h1>
          <p className="text-warning text-center"><b>Service at its best...</b></p>
				
			  </div>

        <section className="mission">
				<div className="container-fluid">
					<div>
						<br />
			 <h1 className="text-warning text-center"><strong>Our Mission</strong></h1>
			</div>
			 <div className="about">
			 	<p className="text-light">
			 		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 		<br />

			 		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 		<br />
			 		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			 		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			 		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			 		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			 		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			 		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			 	</p>
			 </div>
			</div>
		</section>
			 <br /><br /><br />
			 

			 <h1 className="text-primary text-center"><strong>Founder</strong></h1>
			 <div className="founder">
			 	<img src={require("./images/3.jpg")} className=" img rounded-circle mx-auto d-block" alt="myImage" />
			 
			 	<p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			 	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			 	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			 	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			 	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

			 </p>
			</div>
			<br /><br />

			



			<section className="p-sm-5 p-2 our-team">
				<div className="container-fluid">
					
						<h1 className="text-warning text-center"><strong>Our Team</strong></h1>
					

					<br />
			<div className="row">
				<div className="col-lg-3 col-sm-8 col-10 mx-auto mb-4">
					<div className="card myTeam">
						<img src={require("./images/4.jpg")} className="card-img-top" alt="myImage" />
						<div className="card-body">
							<div className="card-title">
								<h3 className="text-secondary text-center">Pourush Gupta</h3>
							</div>
							<div className="card-subtitle">
								<h4 className="text-success text-center">Web Developer</h4>
							</div>

						</div>
						
					</div>
				</div>
			
				<div className="col-lg-3 col-sm-8 col-10 mx-auto mb-4">
					<div className="card myTeam">
						<img src={require("./images/5.jpg")} className="card-img-top" alt="myImage" />
						<div className="card-body">
							<div className="card-title">
								<h3 className="text-secondary text-center">Yogesh Verma</h3>
							</div>
							<div className="card-subtitle">
								<h4 className="text-success text-center">Software Engineer</h4>
							</div>

						</div>
						
					</div>
				</div>
			
				<div className="col-lg-3 col-sm-8 col-10 mx-auto mb-4">
					<div className="card myTeam">
						<img src={require("./images/6.jpg")} className="card-img-top" alt="myImage" />
						<div className="card-body">
							<div className="card-title">
								<h3 className="text-secondary text-center">Wrig Prajapati</h3>
							</div>
							<div className="card-subtitle">
								<h4 className="text-success text-center">Data Analyst</h4>
							</div>

						</div>
						
					</div>
				</div>
			</div>
		</div>
		<br />
	</section>


			

    <br /><br /><br /><br />

			<section>
				<div className="container">
			<h1 className="text-primary text-center"><strong>Team Talk</strong></h1>
			<div className="team">
				<div className="row">

				<div className="review col-lg-3 col-md-6 col-sm-8 col-12 mx-auto mb-4">
          <img src={require("./images/4.jpg")} className="imgs rounded-circle img-fluid" alt="myImage" />
          <p className="text-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </div>
			  <div className="review col-lg-3 col-md-6 col-sm-8 col-12 mx-auto mb-4">
          <img src={require("./images/5.jpg")} className="imgs rounded-circle img-fluid" alt="myImage" />
          <p className="text-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			  </div>
			<div className="review col-lg-3 col-md-6 col-sm-8 col-12 mx-auto mb-4">
				<img src={require("./images/6.jpg")} className="imgs rounded-circle img-fluid" alt="myImage" />
				<p className="text-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className="review col-lg-3 col-md-6 col-sm-8 col-12 mx-auto mb-4">
				<img src={require("./images/7.jpg")} className="imgs rounded-circle img-fluid" alt="myImage" />
				<p className="text-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
	</div>
</div>
</section>
<br /><br />
      </div>
      </div>
    )
  }
}

export default About
