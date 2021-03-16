import React from "react";
import './workwithus.css';
import "../assets/img/examples/studio-3.jpg";
import img1 from "../assets/img/project.jpg";

export default function Workwithus() {
    
    return (
		<div className="row col-12">
		<div className="col-xl-6  col-lg-6  col-md-12 col-sm-12	parallax  " >
		</div>
		<div className="choose choose-form animate-box  col-xl-6 col-lg-6  col-md-12   col-sm-12 formulaire container ">
		<div className="ftco-heading">
			<h1 className='blanc title'>Start a project with us :</h1>
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
    );
  }