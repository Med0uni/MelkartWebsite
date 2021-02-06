import React from "react";
import './workwithus.css';

export default function Workwithus() {
    
    return (
      <div >
		<div className="row">
			<div className="col-6 parallax " >
			</div>
	    	<div className="choose choose-form animate-box  col-6 formulaire container">
			<div className="ftco-heading">
				<h2 className='blanc'>start a project with us</h2>
			</div>
			<form action="#">
				<div className="row form-group ">
					<div className="col-md-6">
						<label className='blanc' for="fname">First Name</label>
						<input className='inputa' type="text" id="fname" className="form-control"/>
					</div>
					<div className="col-md-6">
						<label className='blanc' for="lname">Last Name</label>
						<input className='input' type="text" id="lname" className="form-control"/>
					</div>
				</div>

				<div className="row form-group">
					<div className="col-md-12">
						<label className='blanc' for="email">Email</label>
						<input className='input' type="text" id="email" className="form-control"/>
					</div>
				</div>

				<div className="row form-group">
					<div className="col-md-12">
						<label className='blanc' for="subject">Subject</label>
						<input className='input' type="text" id="subject" className="form-control"/>
					</div>
				</div>

				<div className="row form-group">
					<div className="col-md-12">
						<label className='blanc' for="message">Message</label>
						<textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
					</div>
				</div>
				<div className="form-group">
					<input type="submit" value="Send Message" className="btn btn-primary"/>
				</div>

			</form>	
		</div>
	    </div>
	</div>
    );
  }