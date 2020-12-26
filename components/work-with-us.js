import React from "react";
import "../assets/img/examples/studio-3.jpg"

export default function Workwithus() {
    
    return (
      <div id="ftco-consult">
		<div class="video ftco-video" data-stellar-background-ratio="0.5">
		</div>
		<div class="choose choose-form animate-box">
			<div class="ftco-heading">
				<h2>start a project with us</h2>
			</div>
			<form action="#">
				<div class="row form-group">
					<div class="col-md-6">
						<label for="fname">First Name</label>
						<input type="text" id="fname" class="form-control"/>
					</div>
					<div class="col-md-6">
						<label for="lname">Last Name</label>
						<input type="text" id="lname" class="form-control"/>
					</div>
				</div>

				<div class="row form-group">
					<div class="col-md-12">
						<label for="email">Email</label>
						<input type="text" id="email" class="form-control"/>
					</div>
				</div>

				<div class="row form-group">
					<div class="col-md-12">
						<label for="subject">Subject</label>
						<input type="text" id="subject" class="form-control"/>
					</div>
				</div>

				<div class="row form-group">
					<div class="col-md-12">
						<label for="message">Message</label>
						<textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
					</div>
				</div>
				<div class="form-group">
					<input type="submit" value="Send Message" class="btn btn-primary"/>
				</div>

			</form>	
		</div>
	</div>
    );
  }